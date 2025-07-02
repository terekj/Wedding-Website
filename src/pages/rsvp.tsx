import * as React from 'react';
import { useForm } from 'react-hook-form';
import './rsvp.css';
import picture from '../assets/image_walking.jpeg';

type GuestLookupFields = {
	pin: string;
	surname: string;
};

type RSVPFields = {
	email: string;
	address: string;
	attendees: number;
	pin: string;
	surname: string;
};

type GuestResponse = {
	email: string;
	address: string;
	allotment: number;
	attendees: number;
};

function RSVP() {
	const [verified, setVerified] = React.useState(false);
	const [allotment, setAllotment] = React.useState(1);
	const [count, setCount] = React.useState(0);
	const [verifyValues, setVerifyValues] = React.useState<GuestLookupFields>({ pin: '', surname: '' });

	const {
		register: registerVerify,
		handleSubmit: handleVerify,
		formState: { errors: verifyErrors , isSubmitting: isVerifying},
		reset: resetVerify,
	} = useForm<GuestLookupFields>();

	const {
		register: registerRSVP,
		handleSubmit: handleRSVP,
		formState: { errors: rsvpErrors, isSubmitting: isSaving },
		setValue,
		reset: resetRSVP,
	} = useForm<RSVPFields>();

	const onVerify = async (data: GuestLookupFields) => {
		try {
			const res = await fetch('/api/verify-guest', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const { error } = await res.json();
				alert(error || 'Guest not found.');
				return;
			}

			const guest: GuestResponse = await res.json();
			setVerified(true);
			setVerifyValues(data);
			setAllotment(guest.allotment);
			setCount(guest.attendees || 0);
			setValue('email', guest.email);
			setValue('address', guest.address);
			setValue('attendees', guest.attendees || 0);
		} catch (err) {
			console.error(err);
			alert('Verification failed. Try again later.');
		}
	};

	const onRSVP = async (data: RSVPFields) => {
		try {
			const res = await fetch('/api/submit-rsvp', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...data, ...verifyValues }),
			});

			if (!res.ok) {
				const { error } = await res.json();
				alert(error || 'RSVP submission failed.');
				return;
			}

			alert('RSVP submitted!');
			resetRSVP();
			resetVerify();
			setVerified(false);
			setCount(0);
		} catch (err) {
			console.error(err);
			alert('RSVP failed. Try again later.');
		}
	};

	const increment = () => {
		if (count < allotment) {
			const next = count + 1;
			setCount(next);
			setValue('attendees', next);
		}
	};

	const decrement = () => {
		if (count > 0) {
			const next = count - 1;
			setCount(next);
			setValue('attendees', next);
		}
	};

	return (
		<div className="section-container">
			<section id="rsvp">
				<div className="outer-border">
					<div className="form-box">
						<h2>RSVP</h2>

						{!verified && (
							<form onSubmit={handleVerify(onVerify)}>
								<label>Guest Pin</label>
								<input
									{...registerVerify("pin", {
										required: "Enter your 4-character Guest Pin.",
										pattern: {
											value: /^[a-zA-Z0-9]{4}$/,
											message: "Invalid Guest Pin format.",
										},
									})}
									type="text"
									placeholder="XXXX"
									id="pin"
								/>
								{verifyErrors.pin && <p className="error">{verifyErrors.pin.message}</p>}

								<label>Last Name</label>
								<input
									{...registerVerify("surname", {
										required: "Enter the last name on your invite.",
									})}
									type="text"
									placeholder="Last Name"
									id="surname"
								/>
								{verifyErrors.surname && <p className="error">{verifyErrors.surname.message}</p>}

								<button type="submit" disabled={isVerifying}>
									{isVerifying ? 'Searching...' : 'Continue'}
								</button>
							</form>
						)}

						{verified && (
							<form onSubmit={handleRSVP(onRSVP)}>
								<label>Email Address</label>
								<input
									{...registerRSVP("email", { required: "Email is required." })}
									type="email"
									placeholder="Email Address"
								/>
								{rsvpErrors.email && <p className="error">{rsvpErrors.email.message}</p>}

								<label>Mailing Address</label>
								<input
									{...registerRSVP("address", { required: "Mailing address is required." })}
									type="text"
									placeholder="Mailing Address"
								/>
								{rsvpErrors.address && <p className="error">{rsvpErrors.address.message}</p>}

								<label>Attending Guests <span>(max {allotment})</span></label>
								<div className="attendee-selector">
									<p id="guest-count">{count}</p>
									<button type="button" className="arrow decrement" onClick={decrement} disabled={count === 0}>▽</button>
									<button type="button" className="arrow increment" onClick={increment} disabled={count === allotment}>△</button>
								</div>
								<input type="hidden" {...registerRSVP("attendees", { required: true })} />

								<button disabled={isSaving} type="submit">
									{isSaving ? 'Saving...' : 'Save RSVP'}
								</button>
							</form>
						)}
					</div>

					<div className="blurb">
						<h4>Where is my guest pin?</h4>
						<p>Your guest pin can be found on the RSVP card of either your digital or paper invitation.</p>

						<h4>Which last name do I input?</h4>
						<p>For authentication, provide the first surname addressed in your digital or paper invitation.</p>
					</div>
				</div>
			</section>
			<section id="rsvp-picture">
				<img src={picture} alt="Walking Image" />
			</section>
		</div>
	);
}

export default RSVP;
