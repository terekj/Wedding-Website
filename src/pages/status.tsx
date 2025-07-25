import * as React from 'react';
import './status.css';
import '../global.css';

type Guest = {
  surname: string;
  attendees: number;
  allotment: number;
  pin: string;
};

type RSVPStatus = {
  totalAttendees: number;
  totalAllotted: number;
  attendingGuests: Guest[];
};


function Status() {
    const [attendees, setAttendees] = React.useState(0);
    const [allotted, setAllotted] = React.useState(0);
    const [guestData, setGuestData] = React.useState<Guest[]>([]);
;

    const status = async () => {
        try {
            const res = await fetch('/api/rsvp-status-all', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!res.ok) {
                const { error } = await res.json();
                alert(error || 'Status retrieval failed.');
                return;
            }

            const data = await res.json() as RSVPStatus;
            console.log('setting new status counts from data: ', data);
            setAttendees(data.totalAttendees);
            setAllotted(data.totalAllotted);
            setGuestData(data.attendingGuests);
        } catch (err) {
            console.error(err);
            alert('Status retrieval failed. Try again later.');
        }
    };

    React.useEffect(() => {
        status();
    }, []);

    return (
        <>
        <div className="status-container">
            <div className="status">
                <span className="attendees">{attendees}</span>/
                <span className="allotted">{allotted}</span>
            </div>
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center', width: '100%' }}>
        <h3 style={{fontSize: 'var(--font-xl)'}}>Attending Guests</h3>
        <div className="table" style={{marginBottom: '3rem'}}>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc', color: 'white', background: 'var(--color200)' }}>
                <div style={{ padding: '0.5rem 1rem', minWidth: '180px' }}>Attendees / Allotment</div>
                <div style={{ padding: '0.5rem 1rem', minWidth: '100px' }}>PIN</div>
                <div style={{ padding: '0.5rem 1rem', minWidth: '150px' }}>Surname</div>
            </div>
            {guestData.map((guest, index) => (
            <div key={index} style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                <div style={{ padding: '0.5rem 1rem', minWidth: '180px', fontFamily: 'Inter, sans-serif' }}>{guest.attendees} / {guest.allotment}</div>
                <div style={{ padding: '0.5rem 1rem', minWidth: '100px' }}>{guest.pin.toUpperCase()}</div>
                <div style={{ padding: '0.5rem 1rem', minWidth: '150px' }}>{guest.surname}</div>
            </div>
            ))}
        </div>
        </div>
        </>
    );
}

export default Status;
