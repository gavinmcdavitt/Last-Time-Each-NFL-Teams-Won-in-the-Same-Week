/**
 * fantasy.js
 * - Filters by position/team
 * - Checkbox: checked = 1 random, unchecked = up to 5 random (2 per row)
 * - Random button = 1 completely random
 */

import allYearsData from './all_top100_weekly.js';

let allPerformances = [];
for (const year in allYearsData) {
    if (allYearsData[year] && Array.isArray(allYearsData[year])) {
        allPerformances = allPerformances.concat(allYearsData[year]);
    }
}

console.log(`Loaded ${allPerformances.length} top performances.`);

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

const logoMap = {
    ARI: 'assets/nfl-arizona-cardinals-team-logo-2-300x300.png',
    ATL: 'assets/nfl-atlanta-falcons-team-logo-2-300x300.png',
    BAL: 'assets/nfl-baltimore-ravens-team-logo-2-300x300.png',
    BUF: 'assets/nfl-buffalo-bills-team-logo-2-300x300.png',
    CAR: 'assets/nfl-carolina-panthers-team-logo-2-300x300.png',
    CHI: 'assets/nfl-chicago-bears-team-logo-2-300x300.png',
    CIN: 'assets/nfl-cincinnati-bengals-team-logo-2-300x300.png',
    CLE: 'assets/nfl-cleveland-browns-team-logo-2-300x300.png',
    DAL: 'assets/nfl-dallas-cowboys-team-logo-2-300x300.png',
    DEN: 'assets/nfl-denver-broncos-team-logo-2-300x300.png',
    DET: 'assets/nfl-detroit-lions-team-logo-2-300x300.png',
    GB: 'assets/nfl-green-bay-packers-team-logo-2-300x300.png',
    HOU: 'assets/nfl-houston-texans-team-logo-2-300x300.png',
    IND: 'assets/nfl-indianapolis-colts-team-logo-2-300x300.png',
    JAX: 'assets/nfl-jacksonville-jaguars-team-logo-2-300x300.png',
    KC: 'assets/nfl-kansas-city-chiefs-team-logo-2-300x300.png',
    LA: 'assets/nfl-los-angeles-rams-team-logo-2-300x300.png',
    LAC: 'assets/nfl-los-angeles-chargers-team-logo-2-300x300.png',
    LV: 'assets/nfl-oakland-raiders-team-logo-2-300x300.png',
    MIA: 'assets/nfl-miami-dolphins-team-logo-2-300x300.png',
    MIN: 'assets/nfl-minnesota-vikings-team-logo-2-300x300.png',
    NE: 'assets/nfl-new-england-patriots-team-logo-2-300x300.png',
    NO: 'assets/nfl-new-orleans-saints-team-logo-2-300x300.png',
    NYG: 'assets/nfl-new-york-giants-team-logo-2-300x300.png',
    NYJ: 'assets/nfl-new-york-jets-team-logo-2-300x300.png',
    PHI: 'assets/nfl-philadelphia-eagles-team-logo-2-300x300.png',
    PIT: 'assets/nfl-pittsburgh-steelers-team-logo-2-300x300.png',
    SEA: 'assets/nfl-seattle-seahawks-team-logo-2-300x300.png',
    SF: 'assets/nfl-san-francisco-49ers-team-logo-2-300x300.png',
    TB: 'assets/nfl-tampa-bay-buccaneers-team-logo-2-300x300.png',
    TEN: 'assets/nfl-tennessee-titans-team-logo-2-300x300.png',
    WAS: 'assets/nfl-washington-commanders-team-logo-2-300x300.png'
};

// Populate team dropdown
const teamFilter = document.getElementById('team-filter');
Object.keys(fullNameMap).sort().forEach(abbr => {
    const opt = document.createElement('option');
    opt.value = abbr;
    opt.textContent = fullNameMap[abbr];
    teamFilter.appendChild(opt);
});

function renderPerformances(performances) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (performances.length === 0) {
        results.innerHTML = '<p style="text-align:center;color:#ccc;">No performances match your filters.</p>';
        return;
    }

    const section = document.createElement('div');
    section.className = 'week-section';
    section.innerHTML = `<h2>${performances.length} Monster Performance${performances.length > 1 ? 's' : ''}</h2><div class="win-details"><ul></ul></div>`;
    const ul = section.querySelector('ul');

    performances.forEach(p => {
        const teamName = fullNameMap[p.team] || p.team;
        const logo = logoMap[p.team] || '';

        const points = Number(p.fantasy_points || 0).toFixed(1);
        const pprPoints = Number(p.fantasy_points_ppr || 0).toFixed(1);

        let keyStats = '';
        if (p.position === 'QB') {
            keyStats = `${p.passing_yards || 0} pass yds, ${p.passing_tds || 0} TD${p.passing_tds === 1 ? '' : 's'}`;
            if ((p.rushing_yards || 0) > 20) keyStats += ` | ${p.rushing_yards} rush yds`;
        } else if (p.position === 'RB') {
            keyStats = `${p.rushing_yards || 0} rush yds, ${p.rushing_tds || 0} TD${p.rushing_tds === 1 ? '' : 's'} (${p.carries || 0} car)`;
            if ((p.receptions || 0) > 3) keyStats += ` | ${p.receiving_yards || 0} rec yds`;
        } else {
            keyStats = `${p.receiving_yards || 0} rec yds, ${p.receiving_tds || 0} TD${p.receiving_tds === 1 ? '' : 's'} (${p.receptions || 0}/${p.targets || 0} tgts)`;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${logo ? `<img src="${logo}" alt="${teamName}">` : ''}
            <div>
                <strong>${p.player_display_name} (${p.position}, ${teamName})</strong><br>
                ${p.season} Week ${p.week} vs ${p.opponent_team}<br>
                <strong>${points} fantasy points</strong> (PPR: ${pprPoints})<br>
                ${keyStats}
            </div>
        `;
        ul.appendChild(li);
    });

    results.appendChild(section);
}

function getFiltered() {
    const pos = document.getElementById('position-filter').value;
    const team = document.getElementById('team-filter').value;

    let filtered = allPerformances.filter(p => {
        if (pos && p.position !== pos) return false;
        if (team && p.team !== team) return false;
        return true;
    });

    filtered.sort((a, b) => b.fantasy_points - a.fantasy_points);
    return filtered;
}

function showFiltered() {
    const single = document.getElementById('single-checkbox').checked;
    let performances = getFiltered();

    if (performances.length === 0) {
        renderPerformances([]);
        return;
    }

    if (single) {
        // Checked: show 1 random
        const randomIndex = Math.floor(Math.random() * performances.length);
        performances = [performances[randomIndex]];
    } else {
        // Unchecked: show up to 5 random
        const shuffled = [...performances].sort(() => 0.5 - Math.random());
        performances = shuffled.slice(0, 5);
    }

    renderPerformances(performances);
}

function showRandom() {
    if (allPerformances.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allPerformances.length);
    renderPerformances([allPerformances[randomIndex]]);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('show-btn').addEventListener('click', showFiltered);
    document.getElementById('random-btn').addEventListener('click', showRandom);

    // Initial load: show up to 5 random from all data
    showFiltered();
});