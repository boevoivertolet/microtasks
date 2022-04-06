import React from "react";

export function Week() {
    return (
        <>
            <ul>
                <li><input type="checkbox" checked={false}/><span>mon</span></li>
                <li><input type="checkbox" checked={true}/><span>tue</span></li>
                <li><input type="checkbox" checked={false}/><span>wed</span></li>
                <li><input type="checkbox" checked={false}/><span>thu</span></li>
                <li><input type="checkbox" checked={false}/><span>fri</span></li>
                <li><input type="checkbox" checked={false}/><span>sat</span></li>
                <li><input type="checkbox" checked={false}/><span>sun</span></li>

            </ul>
        </>
    )
}