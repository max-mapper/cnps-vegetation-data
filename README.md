# cnps-vegetation-data

`mcv2.csv` an `mcv2.json` are scraped copies of the data from all of the CNPS vegetation alliance pages e.g. https://vegetation.cnps.org/alliance/1 through page 612.

For example

```json
{
  "scientificName": "Yucca brevifolia",
  "subtitle": "Joshua tree woodland",
  "allianceType": "Woodland Alliance",
  "fullName": "Yucca brevifolia Woodland Alliance",
  "link": "https://vegetation.cnps.org/alliance/99",
  "MCV (1995)": "Joshua tree series",
  "NVCS (2009)": "Yucca brevifolia wooded herbaceous alliance, Yucca brevifolia wooded shrubland alliance",
  "Calveg": "Joshua tree",
  "Holland": "Mojave mixed woody scrub, Mojave mixed steppe, Joshua tree woodland",
  "Munz": "Joshua tree woodland",
  "WHR": "Joshua tree",
  "CDFW CA Code": "33.170.00",
  "Formation Class": "Xeromorphic Scrub and Herb Vegetation (Semi-Desert)",
  "Formation Subclass": "Warm Semi-Desert Scrub and Grassland",
  "Formation": "Warm Semi-Desert Scrub and Grassland",
  "Division": "Sonoran and Chihuahuan Semi-Desert Scrub and Grassland",
  "Macro Group": "Mojavean-Sonoran Desert Scrub",
  "Group": "Mojavean upper desert scrub",
  "Life forms": "Shrub; evergreen; rhizomatous, clonal",
  "Seed storage": "Soil",
  "Seed longevity": "Short to medium",
  "Mode of dispersal": "Animal; wind",
  "Germination agents": "Stratification—winter? (improves germination)",
  "Mode of sprouting": "Underground structures (weak)",
  "Survivability after fire/disturbance": "Fire-sensitive; no/low sprouter",
  "Disturbance-stimulated flowering": "No",
  "Recruitment": "Low",
  "Fire return interval": "Long",
  "Seasonality": "Spring-summer-fall",
  "Size/extent": "Medium to large",
  "Complexity": "Multiple",
  "Intensity": "Moderate",
  "Severity": "Moderate to high",
  "Type": "Passive-active crown fire",
  "Regional knowledge": "Southeastern California deserts"
}
```

### run the scraper

```
cd cnps-vegetation-data
npm i csv-write-stream -g
node index.js && cat mcv2.json | csv-write > mcv2.csv
```