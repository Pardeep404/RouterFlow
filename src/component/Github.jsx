import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Pardeep404")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!data) return <div className="text-center py-10">No data found</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-6">
      <div className="flex flex-col items-center">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-gray-500">@{data.login}</p>
        {data.bio && <p className="mt-2 text-center">{data.bio}</p>}
        <p className="mt-2 text-gray-600">
          Location: {data.location || "Not specified"}
        </p>
        <div className="flex mt-4 space-x-6">
          <p>
            <span className="font-semibold">{data.public_repos}</span> Repos
          </p>
          <p>
            <span className="font-semibold">{data.followers}</span> Followers
          </p>
          <p>
            <span className="font-semibold">{data.following}</span> Following
          </p>
        </div>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}

export default Github;
