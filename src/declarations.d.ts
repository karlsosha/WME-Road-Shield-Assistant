// import WazeWrap from 'https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js';
declare module 'https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js';

declare enum CountryIDs {
    AFGANISTAN=1,
    ALBANIA=2,
    ALGERIA=3,
        AMERICAN_SAMOA = 4,
        ANDORRA=5,
        ANGOLA=6,
        ANGUILLA=7,
        ANTARCTICA=8,
        ANTIGUA_AND_BARBUDA=9,
        ARGENTINA=10,
        ARMENIA=11,
        ARUBA=12,
        AUSTRALIA=13,
        AUSTRIA=14,
        AZERBAIJAN=15,
        BAHAMAS=16,
        BAHRAIN=17,
        BAKER_ISLAND=18,
        BANGLADESH=19,
        BARBADOS=20,
        BELGUIM=21,
        BELIZE=22,
        BENIN=23,
        BERMUDA=24,
        BHUTAN=25,
        BOLIVIA=26,
        BOSNIA_AND_HERZEGOWINA=27,
        BOTSWANA=28,
        BOUVET_ISLAND=29,
        BRAZIL=30,
        BRITISH_INDIAN_OCEAN_TERRITORY=31,
        BRITISH_VIRGIN_ISLANDS=32,
        BRUNEI=33,
        BULGARIA=34,
        BURKINA_FASO=35,
        BURUNDI=36,
        BELARUS=37,
        CAMBODIA=38,
        CAMEROON=39,
              CANADA = 40,
              CAPE_VERDE=41,
              CAYMAN_ISLANDS=42,
              CENTRAL_AFRICAN_REPUBLIC=43,
              CHAD=44,
              CHILE=45,
              CHINA=46,
              CHRISTMAS_ISLAND=47,
              COCOS_ISLANDS=48,
              KEELING_ISLANDS=COCOS_ISLANDS,
              COLOMBIA=49,
              COMOROS=50,
              CONGO=51,
              COOK_ISLANDS=52,
              COSTA_RICA=53,
              CROATIA=54,
              CUBA=55,
              CYPRUS=56,
              CZECH_REPUBLIC=57,
              DENMARK=58,
              DJIBOUTI=59,
              DOMINICA=60,
              DOMINICAN_REPUBLIC=61,
              ECUADOR=62,
              EGYPT=63,
              EL_SALVADOR=64,
              EQUATORIAL_GUINEA=65,
              ERITREA=66,
              ESTONIA=67,
              ETHIOPIA=68,
              FALKLAND_ISLANDS=69,
              ISLAS_MALVINAS=FALKLAND_ISLANDS,
              FAROE_ISLANDS=70,
              MICRONEISA=71,
              FIJI=72,
              FRNACE=73,
              FRENCH_GUIANA=74,
              FRENCH_POLYNESIA=75,
              FRENCH_SOUTHERN_TERRITORIES=76,
              GABON=77,
              GAMBIA=78,
              GEORGIA=80,
              GERMANY=81,
              GHANA=82,
              GIBRALTAR=83,
              GLORIOSO_ISLANDS=84,
              GREECE=85,
              GREENLAND=86,
              GRENADA=87,
              GUADELOUPE=88,
              GUAM = 89,
              GUATEMALA=90,
              GUERNSEY=91,
              GUINEA=92,
              GUINEA_BISSAU=93,
              GUYANA=94,
              HAITI=95,
              HEARD_AND_MCDONAL_ISLANDS=96,
              HONDURAS=97,
              HOWLAND_ISLAND=98,
              HUNGARY=99,
              ICELAND=100,
              INDIA=101,
              INDONESIA=102,
              IRAN=103,
              IRAQ=104,
              IRELAND=105,
              ITALY=107,
              COTE_DIVORE=108,
              JAMAICA=109,
              JAN_MAYEN=110,
              JAPAN=111,
              JARVIS_ISLAND=112,
              JERSEY=113,
              JOHNSTON_ATOLL=114,
              JORDAN=115,
              JUAN_DE_NOVA_ISLAND=116,
              KAZAKHSTAN=117,
              KENYA=118,
              KIRIBATI=119,
              KUWAIT=120,
              KYRGYZSTAN=121,
              LAOS=122,
              LATVIA=123,
              LEBANON=124,
              LESOTHO=125,
              LIBERIA=126,
              LIBYA=127,
              LIECHTENSTEIN=128,
              LITHUANIA=129,
              LUXEMBOURG=130,
              MACAU=131,
              MACEDONIA=132,
              MADAGASCAR=133,
              MALAWI=134,
              MALAYSIA=135,
              MALDIVES=136,
              MALI=137,
              MALTA=138,
              ISLE_OF_MAN=139,
              MARSHALL_ISLANDS=140,
              MARTINIQUE=141,
              MAURITANIA=142,
              MAURITIUS=143,
              MAYOTTE=144,
              MEXICO = 145,
              {
                "id": 146,
                "name": "Midway Islands",
                "abbr": "MQ",
                "env": "ROW"
              },
              {
                "id": 147,
                "name": "Moldova",
                "abbr": "MD",
                "env": "ROW"
              },
              {
                "id": 148,
                "name": "Monaco",
                "abbr": "MN",
                "env": "ROW"
              },
              {
                "id": 149,
                "name": "Mongolia",
                "abbr": "MG",
                "env": "ROW"
              },
              {
                "id": 150,
                "name": "Montenegro",
                "abbr": "MW",
                "env": "ROW"
              },
              {
                "id": 151,
                "name": "Montserrat",
                "abbr": "MH",
                "env": "ROW"
              },
              {
                "id": 152,
                "name": "Morocco",
                "abbr": "MO",
                "env": "ROW"
              },
              {
                "id": 153,
                "name": "Mozambique",
                "abbr": "MZ",
                "env": "ROW"
              },
              {
                "id": 154,
                "name": "Myanmar",
                "abbr": "BM",
                "env": "ROW"
              },
              {
                "id": 155,
                "name": "Namibia",
                "abbr": "WA",
                "env": "ROW"
              },
              {
                "id": 156,
                "name": "Nauru",
                "abbr": "NR",
                "env": "ROW"
              },
              {
                "id": 157,
                "name": "Nepal",
                "abbr": "NP",
                "env": "ROW"
              },
              {
                "id": 158,
                "name": "Netherlands",
                "abbr": "NL",
                "env": "ROW"
              },
              {
                "id": 160,
                "name": "New Caledonia",
                "abbr": "NC",
                "env": "ROW"
              },
              {
                "id": 161,
                "name": "New Zealand",
                "abbr": "NZ",
                "env": "ROW"
              },
              {
                "id": 162,
                "name": "Nicaragua",
                "abbr": "NU",
                "env": "ROW"
              },
              {
                "id": 163,
                "name": "Niger",
                "abbr": "NG",
                "env": "ROW"
              },
              {
                "id": 164,
                "name": "Nigeria",
                "abbr": "NI",
                "env": "ROW"
              },
              {
                "id": 165,
                "name": "Niue",
                "abbr": "NE",
                "env": "ROW"
              },
              {
                "id": 166,
                "name": "Norfolk Island",
                "abbr": "NF",
                "env": "ROW"
              },
              NORTHERN_MARIANA_ISLANDS=167,
              NORTH_KOREA=168,
              KOREA_NORTH=NORTH_KOREA,
              {
                "id": 169,
                "name": "Norway",
                "abbr": "NO",
                "env": "ROW"
              },
              {
                "id": 170,
                "name": "Oman",
                "abbr": "MU",
                "env": "ROW"
              },
              {
                "id": 171,
                "name": "Pacific Islands (Palau)",
                "abbr": "PS",
                "env": "ROW"
              },
              {
                "id": 172,
                "name": "Pakistan",
                "abbr": "PK",
                "env": "ROW"
              },
              {
                "id": 173,
                "name": "Panama",
                "abbr": "PM",
                "env": "ROW"
              },
              {
                "id": 174,
                "name": "Papua New Guinea",
                "abbr": "PP",
                "env": "ROW"
              },
              {
                "id": 175,
                "name": "Paracel Islands",
                "abbr": "PF",
                "env": "ROW"
              },
              {
                "id": 176,
                "name": "Paraguay",
                "abbr": "PA",
                "env": "ROW"
              },
              {
                "id": 177,
                "name": "Peru",
                "abbr": "PE",
                "env": "ROW"
              },
              {
                "id": 178,
                "name": "Philippines",
                "abbr": "RP",
                "env": "ROW"
              },
              {
                "id": 179,
                "name": "Pitcairn Islands",
                "abbr": "PC",
                "env": "ROW"
              },
              {
                "id": 180,
                "name": "Poland",
                "abbr": "PL",
                "env": "ROW"
              },
              {
                "id": 181,
                "name": "Portugal",
                "abbr": "PO",
                "env": "ROW"
              },
              PUERTO_RICO=182,
              {
                "id": 183,
                "name": "Qatar",
                "abbr": "QA",
                "env": "ROW"
              },
              {
                "id": 184,
                "name": "Reunion",
                "abbr": "RE",
                "env": "ROW"
              },
              {
                "id": 185,
                "name": "Romania",
                "abbr": "RO",
                "env": "ROW"
              },
              {
                "id": 186,
                "name": "Russia",
                "abbr": "RS",
                "env": "ROW"
              },
              {
                "id": 187,
                "name": "Rwanda",
                "abbr": "RW",
                "env": "ROW"
              },
              {
                "id": 255,
                "name": "Saint Barthélemy",
                "abbr": "BL",
                "env": "ROW"
              },
              {
                "id": 246,
                "name": "Samoa",
                "abbr": "WS",
                "env": "ROW"
              },
              {
                "id": 188,
                "name": "San Marino",
                "abbr": "SM",
                "env": "ROW"
              },
              {
                "id": 189,
                "name": "Sao Tome and Principe",
                "abbr": "TP",
                "env": "ROW"
              },
              {
                "id": 190,
                "name": "Saudi Arabia",
                "abbr": "SA",
                "env": "ROW"
              },
              {
                "id": 191,
                "name": "Senegal",
                "abbr": "SG",
                "env": "ROW"
              },
              {
                "id": 192,
                "name": "Serbia",
                "abbr": "SR",
                "env": "ROW"
              },
              {
                "id": 193,
                "name": "Seychelles",
                "abbr": "SE",
                "env": "ROW"
              },
              {
                "id": 194,
                "name": "Sierra Leone",
                "abbr": "SL",
                "env": "ROW"
              },
              {
                "id": 195,
                "name": "Singapore",
                "abbr": "SN",
                "env": "ROW"
              },
              {
                "id": 257,
                "name": "Sint Maarten",
                "abbr": "SX",
                "env": "ROW"
              },
              {
                "id": 196,
                "name": "Slovakia",
                "abbr": "LO",
                "env": "ROW"
              },
              {
                "id": 197,
                "name": "Slovenia",
                "abbr": "SI",
                "env": "ROW"
              },
              {
                "id": 198,
                "name": "Solomon Islands",
                "abbr": "BP",
                "env": "ROW"
              },
              {
                "id": 199,
                "name": "Somalia",
                "abbr": "SO",
                "env": "ROW"
              },
              {
                "id": 200,
                "name": "South Africa",
                "abbr": "SF",
                "env": "ROW"
              },
              {
                "id": 201,
                "name": "South Georgia and the South Sandwich Islands",
                "abbr": "SX",
                "env": "ROW"
              },
              {
                "id": 202,
                "name": "South Korea",
                "abbr": "KS",
                "env": "ROW"
              },
              {
                "id": 259,
                "name": "South Sudan",
                "abbr": "SS",
                "env": "ROW"
              },
              {
                "id": 203,
                "name": "Spain",
                "abbr": "SP",
                "env": "ROW"
              },
              {
                "id": 204,
                "name": "Spratly Islands",
                "abbr": "PG",
                "env": "ROW"
              },
              {
                "id": 205,
                "name": "Sri Lanka",
                "abbr": "CE",
                "env": "ROW"
              },
              {
                "id": 254,
                "name": "St Martin",
                "abbr": "MF",
                "env": "ROW"
              },
              {
                "id": 206,
                "name": "St. Helena",
                "abbr": "SH",
                "env": "ROW"
              },
              {
                "id": 207,
                "name": "St. Kitts and Nevis",
                "abbr": "SC",
                "env": "ROW"
              },
              {
                "id": 208,
                "name": "St. Lucia",
                "abbr": "ST",
                "env": "ROW"
              },
              {
                "id": 209,
                "name": "St. Pierre and Miquelon",
                "abbr": "SB",
                "env": "ROW"
              },
              {
                "id": 210,
                "name": "St. Vincent and the Grenadines",
                "abbr": "VC",
                "env": "ROW"
              },
              {
                "id": 211,
                "name": "Sudan",
                "abbr": "SU",
                "env": "ROW"
              },
              {
                "id": 212,
                "name": "Suriname",
                "abbr": "NS",
                "env": "ROW"
              },
              {
                "id": 213,
                "name": "Svalbard",
                "abbr": "SV",
                "env": "ROW"
              },
              {
                "id": 214,
                "name": "Swaziland",
                "abbr": "WZ",
                "env": "ROW"
              },
              {
                "id": 215,
                "name": "Sweden",
                "abbr": "SW",
                "env": "ROW"
              },
              {
                "id": 216,
                "name": "Switzerland",
                "abbr": "SZ",
                "env": "ROW"
              },
              {
                "id": 217,
                "name": "Syria",
                "abbr": "SY",
                "env": "ROW"
              },
              {
                "id": 218,
                "name": "Taiwan",
                "abbr": "TW",
                "env": "ROW"
              },
              {
                "id": 219,
                "name": "Tajikistan",
                "abbr": "TI",
                "env": "ROW"
              },
              {
                "id": 220,
                "name": "Tanzania",
                "abbr": "TZ",
                "env": "ROW"
              },
              {
                "id": 221,
                "name": "Thailand",
                "abbr": "TH",
                "env": "ROW"
              },
              {
                "id": 258,
                "name": "Timor-Leste",
                "abbr": "TL",
                "env": "ROW"
              },
              {
                "id": 222,
                "name": "Togo",
                "abbr": "TO",
                "env": "ROW"
              },
              {
                "id": 223,
                "name": "Tokelau",
                "abbr": "TL",
                "env": "ROW"
              },
              {
                "id": 224,
                "name": "Tonga",
                "abbr": "TN",
                "env": "ROW"
              },
              {
                "id": 225,
                "name": "Trinidad and Tobago",
                "abbr": "TD",
                "env": "ROW"
              },
              {
                "id": 226,
                "name": "Tunisia",
                "abbr": "TS",
                "env": "ROW"
              },
              {
                "id": 227,
                "name": "Turkey",
                "abbr": "TU",
                "env": "ROW"
              },
              {
                "id": 228,
                "name": "Turkmenistan",
                "abbr": "TX",
                "env": "ROW"
              },
              {
                "id": 229,
                "name": "Turks and Caicos Islands",
                "abbr": "TK",
                "env": "ROW"
              },
              {
                "id": 230,
                "name": "Tuvalu",
                "abbr": "TV",
                "env": "ROW"
              },
              {
                "id": 231,
                "name": "Uganda",
                "abbr": "UG",
                "env": "ROW"
              },
              {
                "id": 232,
                "name": "Ukraine",
                "abbr": "UP",
                "env": "ROW"
              },
              {
                "id": 233,
                "name": "United Arab Emirates",
                "abbr": "TC",
                "env": "ROW"
              },
              {
                "id": 234,
                "name": "United Kingdom",
                "abbr": "UK",
                "env": "ROW"
              },
              UNITED_STATES=235,
              USA=UNITED_STATES,
              UNITED_STATES_OF_AMERICA=UNITED_STATES,
              US_VIRGIN_ISLANDS=241
              {
                "id": 236,
                "name": "Uruguay",
                "abbr": "UY",
                "env": "ROW"
              },
              {
                "id": 237,
                "name": "Uzbekistan",
                "abbr": "UZ",
                "env": "ROW"
              },
              {
                "id": 238,
                "name": "Vanuatu",
                "abbr": "NH",
                "env": "ROW"
              },
              {
                "id": 239,
                "name": "Venezuela",
                "abbr": "VE",
                "env": "ROW"
              },
              {
                "id": 240,
                "name": "Vietnam",
                "abbr": "VM",
                "env": "ROW"
              },
              {
                "id": 242,
                "name": "Wake Island",
                "abbr": "WQ",
                "env": "ROW"
              },
              {
                "id": 243,
                "name": "Wallis and Futuna",
                "abbr": "WF",
                "env": "ROW"
              },
              {
                "id": 245,
                "name": "Western Sahara",
                "abbr": "WI",
                "env": "ROW"
              },
              {
                "id": 247,
                "name": "Yemen",
                "abbr": "YM",
                "env": "ROW"
              },
              {
                "id": 248,
                "name": "Democratic Republic of the Congo",
                "abbr": "CG",
                "env": "ROW"
              },
              {
                "id": 249,
                "name": "Zambia",
                "abbr": "ZA",
                "env": "ROW"
              },
              {
                "id": 250,
                "name": "Zimbabwe",
                "abbr": "ZI",
                "env": "ROW"
              }
              {
                "id": 251,
                "name": "Finland",
                "abbr": "FI",
                "env": "ROW"
              },
              {
                "id": 252,
                "name": "Curaçao",
                "abbr": "CW",
                "env": "ROW"
              },
             {
                "id": 253,
                "name": "Bonaire, Sint Eustatius and Saba Island",
                "abbr": "BQ",
                "env": "ROW"
              },
              {
                "id": 256,
                "name": "Hong Kong (China)",
                "abbr": "HK",
                "env": "ROW"
              },
          ]
          }
}