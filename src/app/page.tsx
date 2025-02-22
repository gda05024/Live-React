import React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
        <li>
            <Link href="/LiveCodingReactInterview">Live Coding React Interview</Link>
        </li>
        <li>
            <Link href="/ThirtyReactJSCodingInterviewQuestionsForDevelopers">30 ReactJS Coding Interview Questions for Developers
            </Link>
        </li>
    </ul>
  );
}