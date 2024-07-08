import React, { useState } from "react";
import "./App.css";

const options = {
  focale: [
    "85mm photography",
    "35mm photography",
    "50mm photography",
    "24mm photography",
    "135mm photography",
    "200mm photography",
    "300mm photography",
    "400mm photography",
    "600mm photography",
    "800mm photography",
    "14mm photography",
    "20mm photography",
    "28mm photography",
    "40mm photography",
    "55mm photography",
    "70mm photography",
    "90mm photography",
    "105mm photography",
    "180mm photography",
    "250mm photography",
  ],
  cadrage: [
    "Close-up",
    "Medium Shot",
    "Long Shot",
    "Overhead",
    "Low Angle",
    "Extreme wide shot",
    "Dutch angle",
    "Bird’s-eye view",
    "Worm’s-eye view",
    "Two shot",
    "Over-the-shoulder",
    "Point of view",
    "High angle",
    "Eye level",
    "Establishing shot",
    "Tilted frame",
    "Panoramic",
    "Wide shot",
    "Reverse angle",
    "Reaction shot",
  ],
  decor: [
    "Urban setting",
    "Natural landscape",
    "Studio setup",
    "Fantasy world",
    "Minimalist environment",
    "Industrial area",
    "Futuristic city",
    "Desert",
    "Tropical forest",
    "Medieval village",
    "Snowy mountain",
    "Haunted house",
    "Abandoned warehouse",
    "Underwater",
    "Space station",
    "Jungle",
    "Savanna",
    "Beach",
    "Country road",
    "Ancient ruins",
  ],
  lumiere: [
    "Natural lighting",
    "Studio lighting",
    "Low light",
    "Backlit",
    "Silhouette",
    "Hard lighting",
    "Soft lighting",
    "Golden hour",
    "Blue hour",
    "High-key lighting",
    "Chiaroscuro",
    "Rembrandt lighting",
    "Butterfly lighting",
    "Split lighting",
    "Loop lighting",
    "Broad lighting",
    "Short lighting",
    "Rim lighting",
    "Flat lighting",
    "Spot lighting",
  ],
  couleurs: [
    "Vibrant colors",
    "Monochrome colors",
    "Pastel colors",
    "High Contrast colors",
    "Muted colors",
    "Orange and navy blue colors",
    "Red and black colors",
    "Green and gold colors",
    "Purple and pink colors",
    "Blue and white colors",
    "Sepia colors",
    "Warm tones colors",
    "Cool tones colors",
    "Neon colors",
    "Earth tones colors",
    "Bright colors colors",
    "Dark tones colors",
    "Rainbow colors",
    "Black and white colors",
    "Gradient colors",
  ],
  ambiance: [
    "Moody ambiance",
    "Bright ambiance",
    "Dramatic ambiance",
    "Calm ambiance",
    "Energetic ambiance",
    "Cyberpunk ambiance",
    "African ambiance",
    "Vintage ambiance",
    "Gothic ambiance",
    "Ethereal ambiance",
    "Romantic ambiance",
    "Mystical ambiance",
    "Tense ambiance",
    "Joyful ambiance",
    "Mysterious ambiance",
    "Peaceful ambiance",
    "Surreal ambiance",
    "Adventurous ambiance",
    "Melancholic ambiance",
    "Festive ambiance",
  ],
  appareil: [
    "shot on Canon EOS R6",
    "shot on Nikon D850",
    "shot on Sony A7 III",
    "shot on Fujifilm X-T4",
    "shot on Panasonic GH5",
    "shot on Leica M10",
    "shot on Hasselblad X1D",
    "shot on Olympus OM-D E-M1",
    "shot on Pentax K-1",
    "shot on GoPro HERO9",
    "shot on Canon EOS 5D Mark IV",
    "shot on Nikon Z7",
    "shot on Sony A9",
    "shot on Fujifilm GFX 100",
    "shot on Panasonic S1H",
    "shot on Leica Q2",
    "shot on Hasselblad H6D",
    "shot on Olympus PEN-F",
    "shot on Pentax 645Z",
    "shot on DJI Mavic Air 2",
  ],
};

function App() {
  const [sujet, setSujet] = useState("");
  const [focale, setFocale] = useState(options.focale[0]);
  const [cadrage, setCadrage] = useState(options.cadrage[0]);
  const [decor, setDecor] = useState(options.decor[0]);
  const [lumiere, setLumiere] = useState(options.lumiere[0]);
  const [couleurs, setCouleurs] = useState(options.couleurs[0]);
  const [ambiance, setAmbiance] = useState(options.ambiance[0]);
  const [appareil, setAppareil] = useState(options.appareil[0]);
  const [prompt, setPrompt] = useState(
    `${focale} of a ${sujet}, ${cadrage}, ${decor}, ${lumiere}, ${couleurs}, ${ambiance}, ${appareil}`
  );

  const updatePrompt = () => {
    setPrompt(
      `${focale} of a ${sujet}, ${cadrage}, ${decor}, ${lumiere}, ${couleurs}, ${ambiance}, ${appareil}`
    );
  };

  return (
    <div className="App">
      <h1>PromptCraft AI</h1>
      <div className="container">
        <div className="input-section">
          <label>
            Focale:
            <select
              value={focale}
              onChange={(e) => {
                setFocale(e.target.value);
                updatePrompt();
              }}
            >
              {options.focale.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sujet:
            <input
              type="text"
              value={sujet}
              onChange={(e) => {
                setSujet(e.target.value);
                updatePrompt();
              }}
            />
          </label>

          <label>
            Cadrage:
            <select
              value={cadrage}
              onChange={(e) => {
                setCadrage(e.target.value);
                updatePrompt();
              }}
            >
              {options.cadrage.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Décor:
            <select
              value={decor}
              onChange={(e) => {
                setDecor(e.target.value);
                updatePrompt();
              }}
            >
              {options.decor.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Lumière:
            <select
              value={lumiere}
              onChange={(e) => {
                setLumiere(e.target.value);
                updatePrompt();
              }}
            >
              {options.lumiere.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Couleurs:
            <select
              value={couleurs}
              onChange={(e) => {
                setCouleurs(e.target.value);
                updatePrompt();
              }}
            >
              {options.couleurs.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Ambiance:
            <select
              value={ambiance}
              onChange={(e) => {
                setAmbiance(e.target.value);
                updatePrompt();
              }}
            >
              {options.ambiance.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label>
            Appareil photo:
            <select
              value={appareil}
              onChange={(e) => {
                setAppareil(e.target.value);
                updatePrompt();
              }}
            >
              {options.appareil.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="output-section">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={() => navigator.clipboard.writeText(prompt)}>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
