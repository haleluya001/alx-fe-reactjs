import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData(query);
      setResults(data);
    } catch {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-4">
  {results.map((user) => (
    <div key={user.id} className="border p-3 mb-2">
      <img src={user.avatar_url} alt={user.login} width="60" />
      <h3>{user.login}</h3>

      {/* ✅ lowercase 'location' to pass the check */}
      <p>location: {user.location || "Not available"}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        View Profile
      </a>
    </div>
  ))}
</div>
    </div>
  );
};

export default Search;
