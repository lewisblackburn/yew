import { useEffect, useState } from "preact/hooks";

export function App() {
  const [URL, setURL] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!URL.startsWith("http://") || !URL.startsWith("https://")) {
      setURL(`HTTPS://${URL}`);
    }
  }, [searched]);

  return (
    <>
      <div className="mover" data-tauri-drag-region />
      {searched ? (
        <div>
          <iframe src={URL} frameBorder={0} />
        </div>
      ) : (
        <form className="page" onSubmit={() => setSearched(true)}>
          <input onChange={(e: any) => setURL(e.target.value)} />
        </form>
      )}
    </>
  );
}
