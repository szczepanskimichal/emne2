// console.log('Hello, world!');

// const isOdd = require('is-odd');
 
// console.log(isOdd('1')); //=> true
// console.log(isOdd('3')); //=> true
 
// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false

// files.js
const fs = require('fs').promises;
const path = require('path');



async function main() {
  try {
    // Odczyt bieżącego katalogu (ścieżka skryptu)
    const dir = __dirname;

    // Odczyt nazw plików/katalogów
    const names = await fs.readdir(dir);

    // Dla każdego elementu pobieramy staty i tworzymy obiekt z danymi
    const rows = await Promise.all(
      names.map(async (name) => {
        const fullPath = path.join(dir, name);
        const stats = await fs.stat(fullPath);
        return {
          Name: name,
          Size: stats.size,      // rozmiar w bajtach
          Modified: stats.mtime, // data ostatniej zmiany (Date)
        };
      })
    );

    console.table(rows);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
// asdølnfåasdhcf voqher09hyq34¨09yutc ´¨0349htc¨qv4




// // files.js (ulepszona wersja)
// const fs = require('fs').promises;
// const path = require('path');

// function humanFileSize(bytes) {
//   if (bytes === 0) return '0 B';
//   const units = ['B','KB','MB','GB','TB'];
//   const i = Math.floor(Math.log(bytes) / Math.log(1024));
//   return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + units[i];
// }

// function formatDate(d) {
//   // sformatuj datę dla czytelności (możesz użyć 'nb-NO' lub zostawić domyślne)
//   return new Date(d).toLocaleString('nb-NO');
// }

// async function main() {
//   try {
//     const dir = __dirname;
//     // Pobierz direnty (z informacją czy to plik/katalog)
//     const dirents = await fs.readdir(dir, { withFileTypes: true });

//     // Filtrujemy tylko zwykłe pliki (pomijamy katalogi)
//     const fileNames = dirents.filter(d => d.isFile()).map(d => d.name);

//     const rows = await Promise.all(
//       fileNames.map(async (name) => {
//         const full = path.join(dir, name);
//         const stats = await fs.stat(full);
//         return {
//           Name: name,
//           SizeBytes: stats.size,
//           Size: humanFileSize(stats.size),
//           Modified: formatDate(stats.mtime),
//         };
//       })
//     );

//     // sortowanie malejąco po rozmiarze (największe na górze)
//     rows.sort((a,b) => b.SizeBytes - a.SizeBytes);

//     console.table(rows);

//     // zapis do pliku JSON (opcjonalnie)
//     await fs.writeFile(path.join(dir, 'files.json'), JSON.stringify(rows, null, 2));
//     console.log('Zapisano plik files.json');
//   } catch (err) {
//     console.error('Błąd:', err.message);
//     process.exit(1);
//   }
// }

// main();

