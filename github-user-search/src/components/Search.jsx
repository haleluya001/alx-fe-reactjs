import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // ✅ MUST be here

const Search = () => {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const data = await fetchUserData(username);
      setResults(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub user..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {results && (
        <div>
          <img src={results.avatar_url} alt="avatar" width="100" />
          <h2>{results.login}</h2>
          <a href={results.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
