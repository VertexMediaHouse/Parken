// Branch list shared by the home branch finder, /branches and /contact.
// Source: "Our Business Network" sheet. Map pins and directions search the full address.
const EMAIL = 'parkanenterprisesltd@gmail.com'
const MAIN = '+91 92743 37813'
const b = (name, state, tag, address, phone, map) => ({ name, state, tag, tagCls: tag === 'Branch' ? '' : 'tag-red', address, phone, map, email: EMAIL })

export const branches = [
  b('Parkan Enterprises Ltd. – Hubli', 'Karnataka', 'Branch', '1st Floor, Ward No. 1, CTS No. 3210, 3211, 3214 & 3215, Sorabadmath Galli, New Mydar Oni, Hubli, Karnataka 580020', '+91 83105 46858', "Sorabadmath Galli, New Mydar Oni, Hubballi, Karnataka 580020"),
  b('Parkan Enterprises Ltd. – Hubli (Patwari Towers)', 'Karnataka', 'Branch', 'CTS No. 3226, 3227, Patwari Towers, Ground Floor, Sorabadmath Galli, New Mydar Oni, Hubli, Karnataka 580020', MAIN, "Patwari Towers, Sorabadmath Galli, Hubballi, Karnataka 580020"),
  b('Parkan Infra – Hubli', 'Karnataka', 'Branch', 'CTS No. 1047-A/1, Shop No. 04, Yarkad Heights, Dajibanpeth, Hubli, Karnataka 580028', '+91 83105 46858', "Yarkad Heights, Dajibanpeth, Hubballi, Karnataka 580028"),
  b('Pooja Lites – Hubballi', 'Karnataka', 'Branch', 'Patwari Towers, Opp. B.E.O. Office, New Mydar Oni, Hubballi, Karnataka 580020', '+91 80882 19018', "Patwari Towers, New Mydar Oni, Hubballi, Karnataka 580020"),
  b('Pooja Cables – Hubli', 'Karnataka', 'Branch', 'No. SM-66 Hall & Plot, M.T. Sagar, Gokul Road, Industrial Estate, Hubli, Karnataka 580030', '+91 93805 67782', "Pooja Cables, Gokul Road, Hubli"),
  b('Pooja Electricals – Hubballi', 'Karnataka', 'Branch', 'Ground Floor to 2nd Floor, VGM Tower, CTS No. 2274, Myadar Galli, Ward No. 3, Hubballi, Karnataka 580028', '+91 80503 21186', "Pooja Electricals, Hubballi"),
  b('Pooja Trading Company – Hubli', 'Karnataka', 'Branch', 'Ground Floor & First Floor, CTS No. 3289, 3290 & 3391-A, Kalpeth, Maratha Galli, B/H Town Police Station, Ward No. 1, Hubli-Dharwad, Karnataka 580020', '+91 79752 60181', "Maratha Galli, Kalpeth, Hubballi, Karnataka 580020"),
  b('Parkan Enterprises Ltd. – Belgaum', 'Karnataka', 'Branch', 'No. 32, Ground Floor, Teachers Colony, Main Road, Khasbag, Belgaum, Karnataka 590003', '+91 63635 35637', "Teachers Colony, Khasbag, Belagavi, Karnataka 590003"),
  b('Pooja Trading Company – Belgaum', 'Karnataka', 'Branch', 'CTS No. 1069/A-1448, Mahaveer Plaza, Ground Floor, Nr. Basavanna Temple, Basavan Galli, Belgaum, Karnataka 590001', '+91 73384 72165', "Mahaveer Plaza, Basavan Galli, Belagavi, Karnataka 590001"),
  b('Pooja Trading Company – Shivamogga', 'Karnataka', 'Branch', 'Siddheshwar Rice Mill Compound, New Mandli, N.T. Road, Shivamogga, Karnataka 577202', '+91 91485 60447', "Siddheshwar Rice Mill, N.T. Road, Shivamogga, Karnataka 577202"),
  b('Parkan Enterprises Ltd. – Mangalore', 'Karnataka', 'Branch', 'Shop No. G-26, Door No. 20-3-261-38, Sahakari Sadana, Mission Street, Near Rao & Rao Circle, Mangaluru, Karnataka 575001', '+91 86601 67902', "Sahakari Sadana, Mission Street, Mangaluru, Karnataka 575001"),
  b('Parkan Enterprises Ltd. – Madgaon', 'Goa', 'Branch', 'A-G-6, Damodar Laxmi A, Aquem Alto, Margao, South Goa, Goa 403601', '+91 73857 92681', "Damodar Laxmi, Aquem Alto, Margao, Goa 403601"),
  b('Parkan Enterprises Ltd. – Ahmedabad', 'Gujarat', 'Registered Office', 'C-319, City Center, Prem Darwaja, Nr. Girdhar Nagar Circle, Ahmedabad, Gujarat 380016', MAIN, "City Center, Prem Darwaja, Ahmedabad, Gujarat 380016"),
]

// map = short building/street + area + city + PIN that Google can resolve to a pin; full postal addresses often miss
export const mapEmbed = x => `https://www.google.com/maps?q=${encodeURIComponent(x.map)}&z=16&output=embed`
export const directions = x => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x.address)
