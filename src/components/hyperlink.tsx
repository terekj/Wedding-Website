import * as React from "react";

interface HyperlinkProps {
    url: string;
    children: React.ReactNode;
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
}
function Hyperlink({
    url,
    children,
    className = "",
    target = "_self",
    rel = "noopener noreferrer",
}: HyperlinkProps) {
    return (
        <a href={url} className={className} target={target} rel={rel}>
            ← {children}
        </a>
    );
}

export default Hyperlink;
