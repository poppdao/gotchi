import _omit from 'lodash/omit'

const DATA = {
  votes: {
    "title": "Votes in DAO",
    "description": "Evaluate user's involvements with DAO",
  },
  gochi: {
    "title": "Gochi",
    "description": "Assets holding score base on total holding Gotchi numbers",
  },
  avg_xp: {
    "title": "Average XP",
    "description": "Evaluate user's engagements with games and community activities base on average XP of total holding Gotchis",
  },
  avg_kinship: {
    "title": "Average kinship",
    "description": "Evaluate user's engagements with games base on average kinship of total holding Gotchis",
  },
  parcels: {
    "title": "Parcels",
    "description": "Assets holding score base on owned parcels",
  },
  GHST: {
    "title": "GHST",
    "description": "Assets holding score base on staking GHST token",
  },
  rank: {
    "title": "Ranking",
    "description": "Verdit the certificate",
  }
}

const Report = ({scores: scoresRaw}) => {
  const scores = _omit(scoresRaw, ['hash', 'rank'])
  return (
    <div className="max-w-4xl mx-auto">
      <ul className="space-y-4 py-6 px-6 lg:pl-6 lg:pr-6 bg-gray-50 rounded-xl">
        {Object.keys(scores).map((key) => (
          <li key={key} className="p-12 border bg-white rounded-lg">
            <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
              <span className="text-2xl font-semibold font-heading">
                {DATA[key]?.title}
              </span>
              <span className="text-green-500">{scores[key]}</span>
            </button>
            <p className="mt-4 max-w-2xl text-gray-500 leading-loose">
              {DATA[key]?.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Report;
