import { Request, response, Response } from "express";
const { Op } = require("sequelize");
// Importar Modelo
import Cuenta from '../models/cuentas';


export const getCuentas = async ( req: Request, res: Response ) => {

    const cuentas:any = await Cuenta.findAll();

    res.json(cuentas);
}

export const getCuentaById = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const cuenta:any = await Cuenta.findOne({ where: { id }});

    res.json(cuenta);
}

export const postCuenta = async ( req: Request, res: Response ) => {

    const { nombre_cliente, numero_cuenta } = req.body;
    const today = new Date().toISOString();
    const data = { 
        nombre_cliente: nombre_cliente, 
        numero_cuenta: numero_cuenta, 
        updated_at: today, 
        created_at: today 
    };
    const cuenta = await Cuenta.create( data );
    res.json( cuenta );
}

export const putCuenta = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;    

    const cuenta = await Cuenta.findByPk( id );

    const today = new Date().toISOString();
    // const data = { 
    //     nombre_cliente: nombre_cliente, 
    //     numero_cuenta: numero_cuenta, 
    //     updated_at: today
    // };
    body.updated_at = today;
    await cuenta?.update( body );
    
    res.json( cuenta );
}

export const patchCuenta = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;    

    const cuenta = await Cuenta.findByPk( id );

    const today = new Date().toISOString();
    body.updated_at = today;
    await cuenta?.update( body );
    
    res.json( cuenta );
}

export const deleteCuenta = async ( req: Request, res: Response ) => {

    const { id } = req.params; 

    const cuenta = await Cuenta.findByPk( id );
    await cuenta?.destroy();
    
    res.json( cuenta );
}

export const tickets = async ( req: Request, res: Response ) => {

    const { CreatedDate } :any = req.query;

    const data = [
        {
            id: 1,
            created_at: '2022-05-15 23:02:30.563-07'
        },
        {
            id: 3,
            created_at: '2022-05-15 23:01:53.564-07'
        },
        {
            id: 9,
            created_at: '2022-05-15 23:07:44.214-07'
        },
    ]

    // cuentas.forEach((e:any) => {
    //     const creacion = e.created_at.toISOString();

    //     return res.json({ creacion})
    // });
    const tickets = data.filter( (v:any) => v.created_at.includes(CreatedDate) );
    res.json( tickets );
}

export const paises = async ( req: Request, res: Response ) => {

    const { nombre }: any = req.query;
    
    const data = paises_data.filter( v => v.nombre.toLocaleLowerCase().includes(nombre) );
    
    res.json( data );
}

const paises_data = [ 
    {nombre: 'Afghanistan', codigo: 'AF'}, 
    {nombre: '??land Islands', codigo: 'AX'}, 
    {nombre: 'Albania', codigo: 'AL'}, 
    {nombre: 'Algeria', codigo: 'DZ'}, 
    {nombre: 'American Samoa', codigo: 'AS'}, 
    {nombre: 'AndorrA', codigo: 'AD'}, 
    {nombre: 'Angola', codigo: 'AO'}, 
    {nombre: 'Anguilla', codigo: 'AI'}, 
    {nombre: 'Antarctica', codigo: 'AQ'}, 
    {nombre: 'Antigua and Barbuda', codigo: 'AG'}, 
    {nombre: 'Argentina', codigo: 'AR'}, 
    {nombre: 'Armenia', codigo: 'AM'}, 
    {nombre: 'Aruba', codigo: 'AW'}, 
    {nombre: 'Australia', codigo: 'AU'}, 
    {nombre: 'Austria', codigo: 'AT'}, 
    {nombre: 'Azerbaijan', codigo: 'AZ'}, 
    {nombre: 'Bahamas', codigo: 'BS'}, 
    {nombre: 'Bahrain', codigo: 'BH'}, 
    {nombre: 'Bangladesh', codigo: 'BD'}, 
    {nombre: 'Barbados', codigo: 'BB'}, 
    {nombre: 'Belarus', codigo: 'BY'}, 
    {nombre: 'Belgium', codigo: 'BE'}, 
    {nombre: 'Belize', codigo: 'BZ'}, 
    {nombre: 'Benin', codigo: 'BJ'}, 
    {nombre: 'Bermuda', codigo: 'BM'}, 
    {nombre: 'Bhutan', codigo: 'BT'}, 
    {nombre: 'Bolivia', codigo: 'BO'}, 
    {nombre: 'Bosnia and Herzegovina', codigo: 'BA'}, 
    {nombre: 'Botswana', codigo: 'BW'}, 
    {nombre: 'Bouvet Island', codigo: 'BV'}, 
    {nombre: 'Brazil', codigo: 'BR'}, 
    {nombre: 'British Indian Ocean Territory', codigo: 'IO'}, 
    {nombre: 'Brunei Darussalam', codigo: 'BN'}, 
    {nombre: 'Bulgaria', codigo: 'BG'}, 
    {nombre: 'Burkina Faso', codigo: 'BF'}, 
    {nombre: 'Burundi', codigo: 'BI'}, 
    {nombre: 'Cambodia', codigo: 'KH'}, 
    {nombre: 'Cameroon', codigo: 'CM'}, 
    {nombre: 'Canada', codigo: 'CA'}, 
    {nombre: 'Cape Verde', codigo: 'CV'}, 
    {nombre: 'Cayman Islands', codigo: 'KY'}, 
    {nombre: 'Central African Republic', codigo: 'CF'}, 
    {nombre: 'Chad', codigo: 'TD'}, 
    {nombre: 'Chile', codigo: 'CL'}, 
    {nombre: 'China', codigo: 'CN'}, 
    {nombre: 'Christmas Island', codigo: 'CX'}, 
    {nombre: 'Cocos (Keeling) Islands', codigo: 'CC'}, 
    {nombre: 'Colombia', codigo: 'CO'}, 
    {nombre: 'Comoros', codigo: 'KM'}, 
    {nombre: 'Congo', codigo: 'CG'}, 
    {nombre: 'Congo, The Democratic Republic of the', codigo: 'CD'}, 
    {nombre: 'Cook Islands', codigo: 'CK'}, 
    {nombre: 'Costa Rica', codigo: 'CR'}, 
    {nombre: 'Cote D\'Ivoire', codigo: 'CI'}, 
    {nombre: 'Croatia', codigo: 'HR'}, 
    {nombre: 'Cuba', codigo: 'CU'}, 
    {nombre: 'Cyprus', codigo: 'CY'}, 
    {nombre: 'Czech Republic', codigo: 'CZ'}, 
    {nombre: 'Denmark', codigo: 'DK'}, 
    {nombre: 'Djibouti', codigo: 'DJ'}, 
    {nombre: 'Dominica', codigo: 'DM'}, 
    {nombre: 'Dominican Republic', codigo: 'DO'}, 
    {nombre: 'Ecuador', codigo: 'EC'}, 
    {nombre: 'Egypt', codigo: 'EG'}, 
    {nombre: 'El Salvador', codigo: 'SV'}, 
    {nombre: 'Equatorial Guinea', codigo: 'GQ'}, 
    {nombre: 'Eritrea', codigo: 'ER'}, 
    {nombre: 'Estonia', codigo: 'EE'}, 
    {nombre: 'Ethiopia', codigo: 'ET'}, 
    {nombre: 'Falkland Islands (Malvinas)', codigo: 'FK'}, 
    {nombre: 'Faroe Islands', codigo: 'FO'}, 
    {nombre: 'Fiji', codigo: 'FJ'}, 
    {nombre: 'Finland', codigo: 'FI'}, 
    {nombre: 'France', codigo: 'FR'}, 
    {nombre: 'French Guiana', codigo: 'GF'}, 
    {nombre: 'French Polynesia', codigo: 'PF'}, 
    {nombre: 'French Southern Territories', codigo: 'TF'}, 
    {nombre: 'Gabon', codigo: 'GA'}, 
    {nombre: 'Gambia', codigo: 'GM'}, 
    {nombre: 'Georgia', codigo: 'GE'}, 
    {nombre: 'Germany', codigo: 'DE'}, 
    {nombre: 'Ghana', codigo: 'GH'}, 
    {nombre: 'Gibraltar', codigo: 'GI'}, 
    {nombre: 'Greece', codigo: 'GR'}, 
    {nombre: 'Greenland', codigo: 'GL'}, 
    {nombre: 'Grenada', codigo: 'GD'}, 
    {nombre: 'Guadeloupe', codigo: 'GP'}, 
    {nombre: 'Guam', codigo: 'GU'}, 
    {nombre: 'Guatemala', codigo: 'GT'}, 
    {nombre: 'Guernsey', codigo: 'GG'}, 
    {nombre: 'Guinea', codigo: 'GN'}, 
    {nombre: 'Guinea-Bissau', codigo: 'GW'}, 
    {nombre: 'Guyana', codigo: 'GY'}, 
    {nombre: 'Haiti', codigo: 'HT'}, 
    {nombre: 'Heard Island and Mcdonald Islands', codigo: 'HM'}, 
    {nombre: 'Holy See (Vatican City State)', codigo: 'VA'}, 
    {nombre: 'Honduras', codigo: 'HN'}, 
    {nombre: 'Hong Kong', codigo: 'HK'}, 
    {nombre: 'Hungary', codigo: 'HU'}, 
    {nombre: 'Iceland', codigo: 'IS'}, 
    {nombre: 'India', codigo: 'IN'}, 
    {nombre: 'Indonesia', codigo: 'ID'}, 
    {nombre: 'Iran, Islamic Republic Of', codigo: 'IR'}, 
    {nombre: 'Iraq', codigo: 'IQ'}, 
    {nombre: 'Ireland', codigo: 'IE'}, 
    {nombre: 'Isle of Man', codigo: 'IM'}, 
    {nombre: 'Israel', codigo: 'IL'}, 
    {nombre: 'Italy', codigo: 'IT'}, 
    {nombre: 'Jamaica', codigo: 'JM'}, 
    {nombre: 'Japan', codigo: 'JP'}, 
    {nombre: 'Jersey', codigo: 'JE'}, 
    {nombre: 'Jordan', codigo: 'JO'}, 
    {nombre: 'Kazakhstan', codigo: 'KZ'}, 
    {nombre: 'Kenya', codigo: 'KE'}, 
    {nombre: 'Kiribati', codigo: 'KI'}, 
    {nombre: 'Korea, Democratic People\'S Republic of', codigo: 'KP'}, 
    {nombre: 'Korea, Republic of', codigo: 'KR'}, 
    {nombre: 'Kuwait', codigo: 'KW'}, 
    {nombre: 'Kyrgyzstan', codigo: 'KG'}, 
    {nombre: 'Lao People\'S Democratic Republic', codigo: 'LA'}, 
    {nombre: 'Latvia', codigo: 'LV'}, 
    {nombre: 'Lebanon', codigo: 'LB'}, 
    {nombre: 'Lesotho', codigo: 'LS'}, 
    {nombre: 'Liberia', codigo: 'LR'}, 
    {nombre: 'Libyan Arab Jamahiriya', codigo: 'LY'}, 
    {nombre: 'Liechtenstein', codigo: 'LI'}, 
    {nombre: 'Lithuania', codigo: 'LT'}, 
    {nombre: 'Luxembourg', codigo: 'LU'}, 
    {nombre: 'Macao', codigo: 'MO'}, 
    {nombre: 'Macedonia, The Former Yugoslav Republic of', codigo: 'MK'}, 
    {nombre: 'Madagascar', codigo: 'MG'}, 
    {nombre: 'Malawi', codigo: 'MW'}, 
    {nombre: 'Malaysia', codigo: 'MY'}, 
    {nombre: 'Maldives', codigo: 'MV'}, 
    {nombre: 'Mali', codigo: 'ML'}, 
    {nombre: 'Malta', codigo: 'MT'}, 
    {nombre: 'Marshall Islands', codigo: 'MH'}, 
    {nombre: 'Martinique', codigo: 'MQ'}, 
    {nombre: 'Mauritania', codigo: 'MR'}, 
    {nombre: 'Mauritius', codigo: 'MU'}, 
    {nombre: 'Mayotte', codigo: 'YT'}, 
    {nombre: 'Mexico', codigo: 'MX'}, 
    {nombre: 'Micronesia, Federated States of', codigo: 'FM'}, 
    {nombre: 'Moldova, Republic of', codigo: 'MD'}, 
    {nombre: 'Monaco', codigo: 'MC'}, 
    {nombre: 'Mongolia', codigo: 'MN'}, 
    {nombre: 'Montserrat', codigo: 'MS'}, 
    {nombre: 'Morocco', codigo: 'MA'}, 
    {nombre: 'Mozambique', codigo: 'MZ'}, 
    {nombre: 'Myanmar', codigo: 'MM'}, 
    {nombre: 'Namibia', codigo: 'NA'}, 
    {nombre: 'Nauru', codigo: 'NR'}, 
    {nombre: 'Nepal', codigo: 'NP'}, 
    {nombre: 'Netherlands', codigo: 'NL'}, 
    {nombre: 'Netherlands Antilles', codigo: 'AN'}, 
    {nombre: 'New Caledonia', codigo: 'NC'}, 
    {nombre: 'New Zealand', codigo: 'NZ'}, 
    {nombre: 'Nicaragua', codigo: 'NI'}, 
    {nombre: 'Niger', codigo: 'NE'}, 
    {nombre: 'Nigeria', codigo: 'NG'}, 
    {nombre: 'Niue', codigo: 'NU'}, 
    {nombre: 'Norfolk Island', codigo: 'NF'}, 
    {nombre: 'Northern Mariana Islands', codigo: 'MP'}, 
    {nombre: 'Norway', codigo: 'NO'}, 
    {nombre: 'Oman', codigo: 'OM'}, 
    {nombre: 'Pakistan', codigo: 'PK'}, 
    {nombre: 'Palau', codigo: 'PW'}, 
    {nombre: 'Palestinian Territory, Occupied', codigo: 'PS'}, 
    {nombre: 'Panama', codigo: 'PA'}, 
    {nombre: 'Papua New Guinea', codigo: 'PG'}, 
    {nombre: 'Paraguay', codigo: 'PY'}, 
    {nombre: 'Peru', codigo: 'PE'}, 
    {nombre: 'Philippines', codigo: 'PH'}, 
    {nombre: 'Pitcairn', codigo: 'PN'}, 
    {nombre: 'Poland', codigo: 'PL'}, 
    {nombre: 'Portugal', codigo: 'PT'}, 
    {nombre: 'Puerto Rico', codigo: 'PR'}, 
    {nombre: 'Qatar', codigo: 'QA'}, 
    {nombre: 'Reunion', codigo: 'RE'}, 
    {nombre: 'Romania', codigo: 'RO'}, 
    {nombre: 'Russian Federation', codigo: 'RU'}, 
    {nombre: 'RWANDA', codigo: 'RW'}, 
    {nombre: 'Saint Helena', codigo: 'SH'}, 
    {nombre: 'Saint Kitts and Nevis', codigo: 'KN'}, 
    {nombre: 'Saint Lucia', codigo: 'LC'}, 
    {nombre: 'Saint Pierre and Miquelon', codigo: 'PM'}, 
    {nombre: 'Saint Vincent and the Grenadines', codigo: 'VC'}, 
    {nombre: 'Samoa', codigo: 'WS'}, 
    {nombre: 'San Marino', codigo: 'SM'}, 
    {nombre: 'Sao Tome and Principe', codigo: 'ST'}, 
    {nombre: 'Saudi Arabia', codigo: 'SA'}, 
    {nombre: 'Senegal', codigo: 'SN'}, 
    {nombre: 'Serbia and Montenegro', codigo: 'CS'}, 
    {nombre: 'Seychelles', codigo: 'SC'}, 
    {nombre: 'Sierra Leone', codigo: 'SL'}, 
    {nombre: 'Singapore', codigo: 'SG'}, 
    {nombre: 'Slovakia', codigo: 'SK'}, 
    {nombre: 'Slovenia', codigo: 'SI'}, 
    {nombre: 'Solomon Islands', codigo: 'SB'}, 
    {nombre: 'Somalia', codigo: 'SO'}, 
    {nombre: 'South Africa', codigo: 'ZA'}, 
    {nombre: 'South Georgia and the South Sandwich Islands', codigo: 'GS'}, 
    {nombre: 'Spain', codigo: 'ES'}, 
    {nombre: 'Sri Lanka', codigo: 'LK'}, 
    {nombre: 'Sudan', codigo: 'SD'}, 
    {nombre: 'Surinombre', codigo: 'SR'}, 
    {nombre: 'Svalbard and Jan Mayen', codigo: 'SJ'}, 
    {nombre: 'Swaziland', codigo: 'SZ'}, 
    {nombre: 'Sweden', codigo: 'SE'}, 
    {nombre: 'Switzerland', codigo: 'CH'}, 
    {nombre: 'Syrian Arab Republic', codigo: 'SY'}, 
    {nombre: 'Taiwan, Province of China', codigo: 'TW'}, 
    {nombre: 'Tajikistan', codigo: 'TJ'}, 
    {nombre: 'Tanzania, United Republic of', codigo: 'TZ'}, 
    {nombre: 'Thailand', codigo: 'TH'}, 
    {nombre: 'Timor-Leste', codigo: 'TL'}, 
    {nombre: 'Togo', codigo: 'TG'}, 
    {nombre: 'Tokelau', codigo: 'TK'}, 
    {nombre: 'Tonga', codigo: 'TO'}, 
    {nombre: 'Trinidad and Tobago', codigo: 'TT'}, 
    {nombre: 'Tunisia', codigo: 'TN'}, 
    {nombre: 'Turkey', codigo: 'TR'}, 
    {nombre: 'Turkmenistan', codigo: 'TM'}, 
    {nombre: 'Turks and Caicos Islands', codigo: 'TC'}, 
    {nombre: 'Tuvalu', codigo: 'TV'}, 
    {nombre: 'Uganda', codigo: 'UG'}, 
    {nombre: 'Ukraine', codigo: 'UA'}, 
    {nombre: 'United Arab Emirates', codigo: 'AE'}, 
    {nombre: 'United Kingdom', codigo: 'GB'}, 
    {nombre: 'United States', codigo: 'US'}, 
    {nombre: 'United States Minor Outlying Islands', codigo: 'UM'}, 
    {nombre: 'Uruguay', codigo: 'UY'}, 
    {nombre: 'Uzbekistan', codigo: 'UZ'}, 
    {nombre: 'Vanuatu', codigo: 'VU'}, 
    {nombre: 'Venezuela', codigo: 'VE'}, 
    {nombre: 'Viet Nam', codigo: 'VN'}, 
    {nombre: 'Virgin Islands, British', codigo: 'VG'}, 
    {nombre: 'Virgin Islands, U.S.', codigo: 'VI'}, 
    {nombre: 'Wallis and Futuna', codigo: 'WF'}, 
    {nombre: 'Western Sahara', codigo: 'EH'}, 
    {nombre: 'Yemen', codigo: 'YE'}, 
    {nombre: 'Zambia', codigo: 'ZM'}, 
    {nombre: 'Zimbabwe', codigo: 'ZW'} 
  ];

