// Full name mapping
const fullNameMap = {
    ARI: 'Arizona Cardinals', ATL: 'Atlanta Falcons', BAL: 'Baltimore Ravens', BUF: 'Buffalo Bills',
    CAR: 'Carolina Panthers', CHI: 'Chicago Bears', CIN: 'Cincinnati Bengals', CLE: 'Cleveland Browns',
    DAL: 'Dallas Cowboys', DEN: 'Denver Broncos', DET: 'Detroit Lions', GB: 'Green Bay Packers',
    HOU: 'Houston Texans', IND: 'Indianapolis Colts', JAX: 'Jacksonville Jaguars', KC: 'Kansas City Chiefs',
    LA: 'Los Angeles Rams', LAC: 'Los Angeles Chargers', LV: 'Las Vegas Raiders', MIA: 'Miami Dolphins',
    MIN: 'Minnesota Vikings', NE: 'New England Patriots', NO: 'New Orleans Saints',
    NYG: 'New York Giants', NYJ: 'New York Jets', PHI: 'Philadelphia Eagles',
    PIT: 'Pittsburgh Steelers', SEA: 'Seattle Seahawks', SF: 'San Francisco 49ers',
    TB: 'Tampa Bay Buccaneers', TEN: 'Tennessee Titans', WAS: 'Washington Commanders'
};
const teamLogos = {
    ARI: 'Assets/nfl-arizona-cardinals-team-logo-2-300x300.png',
    ATL: 'Assets/nfl-atlanta-falcons-team-logo-2-300x300.png',
    BAL: 'Assets/nfl-baltimore-ravens-team-logo-2-300x300.png',
    BUF: 'Assets/nfl-buffalo-bills-team-logo-2-300x300.png',
    CAR: 'Assets/nfl-carolina-panthers-team-logo-2-300x300.png',
    CHI: 'Assets/nfl-chicago-bears-team-logo-2-300x300.png',
    CIN: 'Assets/nfl-cincinnati-bengals-team-logo-2-300x300.png',
    CLE: 'Assets/nfl-cleveland-browns-team-logo-2-300x300.png',
    DAL: 'Assets/nfl-dallas-cowboys-team-logo-2-300x300.png',
    DEN: 'Assets/nfl-denver-broncos-team-logo-2-300x300.png',
    DET: 'Assets/nfl-detroit-lions-team-logo-2-300x300.png',
    GB: 'Assets/nfl-green-bay-packers-team-logo-2-300x300.png',
    HOU: 'Assets/nfl-houston-texans-team-logo-2-300x300.png',
    IND: 'Assets/nfl-indianapolis-colts-team-logo-2-300x300.png',
    JAX: 'Assets/nfl-jacksonville-jaguars-team-logo-2-300x300.png',
    KC: 'Assets/nfl-kansas-city-chiefs-team-logo-2-300x300.png',
    LA: 'Assets/nfl-los-angeles-rams-team-logo-2-300x300.png',
    LAC: 'Assets/nfl-los-angeles-chargers-team-logo-2-300x300.png',
    LV: 'Assets/nfl-oakland-raiders-team-logo-2-300x300.png',
    MIA: 'Assets/nfl-miami-dolphins-team-logo-2-300x300.png',
    MIN: 'Assets/nfl-minnesota-vikings-team-logo-2-300x300.png',
    NE: 'Assets/nfl-new-england-patriots-team-logo-2-300x300.png',
    NO: 'Assets/nfl-new-orleans-saints-team-logo-2-300x300.png',
    NYG: 'Assets/nfl-new-york-giants-team-logo-2-300x300.png',
    NYJ: 'Assets/nfl-new-york-jets-team-logo-2-300x300.png',
    PHI: 'Assets/nfl-philadelphia-eagles-team-logo-2-300x300.png',
    PIT: 'Assets/nfl-pittsburgh-steelers-team-logo-2-300x300.png',
    SEA: 'Assets/nfl-seattle-seahawks-team-logo-2-300x300.png',
    SF: 'Assets/nfl-san-francisco-49ers-team-logo-2-300x300.png',
    TB: 'Assets/nfl-tampa-bay-buccaneers-team-logo-2-300x300.png',
    TEN: 'Assets/nfl-tennessee-titans-team-logo-2-300x300.png',
    WAS: 'Assets/nfl-washington-commanders-team-logo-2-300x300.png'
};

const logoMap = {
    ARI: 'Assets/nfl-arizona-cardinals-team-logo-2-300x300.png',
    ATL: 'Assets/nfl-atlanta-falcons-team-logo-2-300x300.png',
    BAL: 'Assets/nfl-baltimore-ravens-team-logo-2-300x300.png',
    BUF: 'Assets/nfl-buffalo-bills-team-logo-2-300x300.png',
    CAR: 'Assets/nfl-carolina-panthers-team-logo-2-300x300.png',
    CHI: 'Assets/nfl-chicago-bears-team-logo-2-300x300.png',
    CIN: 'Assets/nfl-cincinnati-bengals-team-logo-2-300x300.png',
    CLE: 'Assets/nfl-cleveland-browns-team-logo-2-300x300.png',
    DAL: 'Assets/nfl-dallas-cowboys-team-logo-2-300x300.png',
    DEN: 'Assets/nfl-denver-broncos-team-logo-2-300x300.png',
    DET: 'Assets/nfl-detroit-lions-team-logo-2-300x300.png',
    GB: 'Assets/nfl-green-bay-packers-team-logo-2-300x300.png',
    HOU: 'Assets/nfl-houston-texans-team-logo-2-300x300.png',
    IND: 'Assets/nfl-indianapolis-colts-team-logo-2-300x300.png',
    JAX: 'Assets/nfl-jacksonville-jaguars-team-logo-2-300x300.png',
    KC: 'Assets/nfl-kansas-city-chiefs-team-logo-2-300x300.png',
    LA: 'Assets/nfl-los-angeles-rams-team-logo-2-300x300.png',
    LAC: 'Assets/nfl-los-angeles-chargers-team-logo-2-300x300.png',
    LV: 'Assets/nfl-oakland-raiders-team-logo-2-300x300.png',
    MIA: 'Assets/nfl-miami-dolphins-team-logo-2-300x300.png',
    MIN: 'Assets/nfl-minnesota-vikings-team-logo-2-300x300.png',
    NE: 'Assets/nfl-new-england-patriots-team-logo-2-300x300.png',
    NO: 'Assets/nfl-new-orleans-saints-team-logo-2-300x300.png',
    NYG: 'Assets/nfl-new-york-giants-team-logo-2-300x300.png',
    NYJ: 'Assets/nfl-new-york-jets-team-logo-2-300x300.png',
    PHI: 'Assets/nfl-philadelphia-eagles-team-logo-2-300x300.png',
    PIT: 'Assets/nfl-pittsburgh-steelers-team-logo-2-300x300.png',
    SEA: 'Assets/nfl-seattle-seahawks-team-logo-2-300x300.png',
    SF: 'Assets/nfl-san-francisco-49ers-team-logo-2-300x300.png',
    TB: 'Assets/nfl-tampa-bay-buccaneers-team-logo-2-300x300.png',
    TEN: 'Assets/nfl-tennessee-titans-team-logo-2-300x300.png',
    WAS: 'Assets/nfl-washington-commanders-team-logo-2-300x300.png'}

document.querySelectorAll('.team-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // stop anchor jump
        link.classList.toggle('selected');
    });
});

// Analyze button
document.getElementById('analyze-btn').addEventListener('click', async () => {
    const selectedLinks = document.querySelectorAll('.team-link.selected');
    const selectedAbbrs = Array.from(selectedLinks).map(a => a.dataset.abbr);

    if (selectedAbbrs.length < 2) {
        alert('Please select at least 2 teams by clicking their logos!');
        return;
    }
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    loading.style.display = 'block';
    results.innerHTML = '';

    try {
        const res = await fetch('./games.csv');
        if (!res.ok) throw new Error('Failed to load CSV');
        const text = await res.text();

        const lines = text.split(/\r?\n/);
        const headers = lines[0].split(',').map(h => h.trim());
        const games = [];

        for (let i = 1; i < lines.length; i++) {
            const vals = lines[i].split(',');
            if (vals.length !== headers.length) continue;
            const game = {};
            headers.forEach((h, j) => game[h] = vals[j].trim());
            games.push(game);
        }

        const wins = [];
        games.forEach(g => {
            const s = parseInt(g.season);
            const w = parseInt(g.week);
            if (isNaN(s) || isNaN(w)) return;

            const hs = parseFloat(g.home_score) || 0;
            const as = parseFloat(g.away_score) || 0;
            if (hs > as) wins.push({season: s, week: w, team: g.home_team});
            else if (as > hs) wins.push({season: s, week: w, team: g.away_team});
        });

        const target = new Set(selectedAbbrs);
        const relevant = wins.filter(w => target.has(w.team));

        const weekly = new Map();
        relevant.forEach(w => {
            const key = `${w.season}-${w.week}`;
            if (!weekly.has(key)) weekly.set(key, new Set());
            weekly.get(key).add(w.team);
        });

        const matches = [];
        weekly.forEach((winners, key) => {
            const [season, week] = key.split('-').map(Number);
            if ([...target].every(t => winners.has(t))) {
                matches.push({season, week});
            }
        });

        matches.sort((a,b) => b.season - a.season || b.week - a.week);

        loading.style.display = 'none';

        if (matches.length === 0) {
            results.innerHTML = '<p class="no-results">No weeks found where all selected teams won.</p>';
            return;
        }

        matches.forEach(m => {
            const section = document.createElement('div');
            section.className = 'week-section';
            section.innerHTML = `<h2>${m.season} Week ${m.week}</h2><ul></ul>`;
            const ul = section.querySelector('ul');

            const weekGames = games.filter(g =>
                parseInt(g.season) === m.season && parseInt(g.week) === m.week &&
                (target.has(g.home_team) || target.has(g.away_team))
            );

            weekGames.forEach(g => {
                const hs = parseFloat(g.home_score) || 0;
                const as = parseFloat(g.away_score) || 0;
                let winner, loser, score, oppScore, loc;

                if (hs > as) {
                    winner = g.home_team;
                    loser = g.away_team;
                    score = hs;
                    oppScore = as;
                    loc = 'home';
                } else if (as > hs) {
                    winner = g.away_team;
                    loser = g.home_team;
                    score = as;
                    oppScore = hs;
                    loc = 'away';
                } else return;

                if (target.has(winner)) {
                    const name = fullNameMap[winner] || winner;
                    const logo = logoMap[winner];
                    const li = document.createElement('li');
                    li.innerHTML = `
    <img 
        src="${logo}" 
        alt="${name}" 
        width="64" 
        height="64"
        style="width:64px;height:64px;object-fit:contain;"
    >
    <strong>${name} (${winner})</strong> defeated ${loser} ${score}-${oppScore} (${loc})
`;

                    ul.appendChild(li);
                }
            });

            results.appendChild(section);
        });

    } catch (e) {
        loading.style.display = 'none';
        results.innerHTML = `<p class="no-results" style="color:red;">Error: ${e.message}</p>`;
        console.error(e);
    }
});
