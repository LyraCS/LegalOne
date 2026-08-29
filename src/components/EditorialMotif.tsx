export default function EditorialMotif() {
  // TODO: replace placeholder illustration with a real editorial photograph
  // (detail kerja notaris: dokumen, tanda tangan, materai) cropped asymmetric.
  return (
    <figure className="relative">
      <svg
        viewBox="0 0 560 720"
        className="aspect-[7/9] w-full"
        role="img"
        aria-label="Ilustrasi placeholder dokumen pendirian usaha · ganti dengan foto editorial"
      >
        <rect width="560" height="720" fill="#FBFAF7" />
        <line x1="40" y1="48" x2="520" y2="48" stroke="rgba(15,27,60,0.18)" strokeWidth="1" />
        <line x1="40" y1="56" x2="520" y2="56" stroke="rgba(15,27,60,0.18)" strokeWidth="1" />

        {/* lembar belakang */}
        <g transform="rotate(-3 320 380)">
          <rect
            x="120"
            y="130"
            width="340"
            height="480"
            fill="#FFFFFF"
            stroke="rgba(15,27,60,0.28)"
            strokeWidth="1"
          />
          <g fill="rgba(15,27,60,0.22)">
            <rect x="160" y="176" width="150" height="10" />
            <rect x="160" y="206" width="230" height="5" />
            <rect x="160" y="222" width="210" height="5" />
            <rect x="160" y="238" width="240" height="5" />
            <rect x="160" y="262" width="120" height="5" />
          </g>
        </g>

        {/* lembar depan */}
        <g transform="rotate(2 280 400)">
          <rect
            x="92"
            y="170"
            width="360"
            height="500"
            fill="#FFFDFB"
            stroke="rgba(15,27,60,0.55)"
            strokeWidth="1"
          />

          {/* kop */}
          <rect x="136" y="216" width="90" height="8" fill="#0F1B3C" />
          <rect x="136" y="238" width="180" height="4" fill="rgba(15,27,60,0.35)" />

          {/* garis badan dokumen */}
          <g fill="rgba(15,27,60,0.3)">
            <rect x="136" y="278" width="272" height="4" />
            <rect x="136" y="296" width="240" height="4" />
            <rect x="136" y="314" width="262" height="4" />
            <rect x="136" y="332" width="180" height="4" />
            <rect x="136" y="358" width="272" height="4" />
            <rect x="136" y="376" width="252" height="4" />
            <rect x="136" y="394" width="210" height="4" />
          </g>

          {/* garis bawah gold pada satu klausa */}
          <rect x="136" y="422" width="150" height="4" fill="#C9A227" />

          {/* tanda tangan */}
          <path
            d="M 160 528 C 200 502, 232 556, 268 520 C 300 488, 316 542, 352 510"
            fill="none"
            stroke="#0F1B3C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="160" y="540" width="86" height="2" fill="#C9A227" />

          {/* stempel hukum */}
          <circle cx="382" cy="470" r="52" fill="#C9A227" />
          <circle cx="382" cy="470" r="40" fill="none" stroke="rgba(10,19,41,0.3)" strokeWidth="1" />
          <g stroke="rgba(10,19,41,0.4)" strokeWidth="1">
            <line x1="382" y1="430" x2="382" y2="440" />
            <line x1="382" y1="500" x2="382" y2="510" />
            <line x1="342" y1="470" x2="352" y2="470" />
            <line x1="412" y1="470" x2="422" y2="470" />
          </g>
          <circle cx="382" cy="470" r="26" fill="none" stroke="rgba(10,19,41,0.5)" strokeWidth="1" />
          <text
            x="382"
            y="478"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="26"
            fontWeight="700"
            fill="#0A1329"
          >
            L·1
          </text>
        </g>

        {/* lembar kertas kecil di depan */}
        <g transform="rotate(6 330 620)">
          <rect
            x="250"
            y="584"
            width="120"
            height="160"
            fill="#FFFFFF"
            stroke="rgba(15,27,60,0.3)"
            strokeWidth="1"
          />
          <rect x="270" y="608" width="60" height="5" fill="rgba(15,27,60,0.35)" />
          <rect x="270" y="624" width="80" height="4" fill="rgba(15,27,60,0.25)" />
          <rect x="270" y="640" width="70" height="4" fill="rgba(15,27,60,0.25)" />
        </g>
      </svg>
    </figure>
  );
}