const airports = [
    // Indian Airports
    {"code":"DEL","name":"Indira Gandhi International Airport","location":"Delhi, India"},
    {"code":"BOM","name":"Chhatrapati Shivaji Maharaj International Airport","location":"Mumbai, Maharashtra, India"},
    {"code":"BLR","name":"Kempegowda International Airport","location":"Bangalore, Karnataka, India"},
    {"code":"MAA","name":"Chennai International Airport","location":"Chennai, Tamil Nadu, India"},
    {"code":"HYD","name":"Rajiv Gandhi International Airport","location":"Hyderabad, Telangana, India"},
    {"code":"CCU","name":"Netaji Subhas Chandra Bose International Airport","location":"Kolkata, West Bengal, India"},
    {"code":"COK","name":"Cochin International Airport","location":"Kochi, Kerala, India"},
    {"code":"GOI","name":"Dabolim Airport","location":"Goa, India"},
    {"code":"AMD","name":"Sardar Vallabhbhai Patel International Airport","location":"Ahmedabad, Gujarat, India"},
    {"code":"PNQ","name":"Pune Airport","location":"Pune, Maharashtra, India"},
    {"code":"TRV","name":"Trivandrum International Airport","location":"Thiruvananthapuram, Kerala, India"},
    {"code":"JAI","name":"Jaipur International Airport","location":"Jaipur, Rajasthan, India"},
    {"code":"BBI","name":"Biju Patnaik International Airport","location":"Bhubaneswar, Odisha, India"},
    {"code":"LKO","name":"Chaudhary Charan Singh International Airport","location":"Lucknow, Uttar Pradesh, India"},
    {"code":"ATQ","name":"Sri Guru Ram Dass Jee International Airport","location":"Amritsar, Punjab, India"},
    {"code":"IXC","name":"Chandigarh Airport","location":"Chandigarh, India"},
    {"code":"IXJ","name":"Jammu Airport","location":"Jammu, Jammu and Kashmir, India"},
    {"code":"SXR","name":"Sheikh ul-Alam International Airport","location":"Srinagar, Jammu and Kashmir, India"},
    {"code":"NAG","name":"Dr. Babasaheb Ambedkar International Airport","location":"Nagpur, Maharashtra, India"},
    {"code":"PAT","name":"Jay Prakash Narayan International Airport","location":"Patna, Bihar, India"},
    {"code":"GAU","name":"Lokpriya Gopinath Bordoloi International Airport","location":"Guwahati, Assam, India"},
    {"code":"IMF","name":"Imphal International Airport","location":"Imphal, Manipur, India"},
    {"code":"IXB","name":"Bagdogra International Airport","location":"Bagdogra, West Bengal, India"},
    {"code":"DIB","name":"Dibrugarh Airport","location":"Dibrugarh, Assam, India"},
    {"code":"IXS","name":"Silchar Airport","location":"Silchar, Assam, India"},
    {"code":"IXA","name":"Agartala Airport","location":"Agartala, Tripura, India"},
    {"code":"AJL","name":"Lengpui Airport","location":"Aizawl, Mizoram, India"},
    {"code":"DMU","name":"Dimapur Airport","location":"Dimapur, Nagaland, India"},
    {"code":"SHL","name":"Shillong Airport","location":"Shillong, Meghalaya, India"},
    {"code":"IXR","name":"Birsa Munda Airport","location":"Ranchi, Jharkhand, India"},
    {"code":"VTZ","name":"Visakhapatnam Airport","location":"Visakhapatnam, Andhra Pradesh, India"},
    {"code":"RPR","name":"Swami Vivekananda Airport","location":"Raipur, Chhattisgarh, India"},
    {"code":"BHO","name":"Raja Bhoj Airport","location":"Bhopal, Madhya Pradesh, India"},
    {"code":"IDR","name":"Devi Ahilya Bai Holkar Airport","location":"Indore, Madhya Pradesh, India"},
    {"code":"UDR","name":"Maharana Pratap Airport","location":"Udaipur, Rajasthan, India"},
    {"code":"JDH","name":"Jodhpur Airport","location":"Jodhpur, Rajasthan, India"},
    {"code":"BDQ","name":"Vadodara Airport","location":"Vadodara, Gujarat, India"},
    {"code":"RAJ","name":"Rajkot Airport","location":"Rajkot, Gujarat, India"},
    {"code":"STV","name":"Surat Airport","location":"Surat, Gujarat, India"},
    {"code":"IXU","name":"Aurangabad Airport","location":"Aurangabad, Maharashtra, India"},
    {"code":"IXY","name":"Kandla Airport","location":"Kandla, Gujarat, India"},
    {"code":"IXK","name":"Keshod Airport","location":"Keshod, Gujarat, India"},
    {"code":"HBX","name":"Hubli Airport","location":"Hubli, Karnataka, India"},
    {"code":"MYQ","name":"Mysore Airport","location":"Mysore, Karnataka, India"},
    {"code":"IXM","name":"Madurai Airport","location":"Madurai, Tamil Nadu, India"},
    {"code":"TRZ","name":"Tiruchirapalli International Airport","location":"Tiruchirapalli, Tamil Nadu, India"},
    {"code":"CJB","name":"Coimbatore International Airport","location":"Coimbatore, Tamil Nadu, India"},
    {"code":"VGA","name":"Vijayawada Airport","location":"Vijayawada, Andhra Pradesh, India"},
    {"code":"TIR","name":"Tirupati Airport","location":"Tirupati, Andhra Pradesh, India"},
    {"code":"BPM","name":"Begumpet Airport","location":"Hyderabad, Telangana, India"},
    {"code":"JLR","name":"Jabalpur Airport","location":"Jabalpur, Madhya Pradesh, India"},
    {"code":"PBD","name":"Porbandar Airport","location":"Porbandar, Gujarat, India"},
    {"code":"SAG","name":"Shirdi Airport","location":"Shirdi, Maharashtra, India"},
    {"code":"ISK","name":"Nashik Airport","location":"Nashik, Maharashtra, India"},
    {"code":"IXD","name":"Allahabad Airport","location":"Allahabad, Uttar Pradesh, India"},
    {"code":"GWL","name":"Gwalior Airport","location":"Gwalior, Madhya Pradesh, India"},
    {"code":"JGA","name":"Jamnagar Airport","location":"Jamnagar, Gujarat, India"},
    {"code":"HJR","name":"Khajuraho Airport","location":"Khajuraho, Madhya Pradesh, India"},
    {"code":"IXW","name":"Sonari Airport","location":"Jamshedpur, Jharkhand, India"},
    {"code":"RJA","name":"Rajahmundry Airport","location":"Rajahmundry, Andhra Pradesh, India"},
    {"code":"DHM","name":"Kangra Airport","location":"Dharamsala, Himachal Pradesh, India"},
    {"code":"LUH","name":"Ludhiana Airport","location":"Ludhiana, Punjab, India"},
    {"code":"BKB","name":"Nal Airport","location":"Bikaner, Rajasthan, India"},
    {"code":"UDR","name":"Maharana Pratap Airport","location":"Udaipur, Rajasthan, India"},
  
    // International Airports
    {"code":"LAX","name":"Los Angeles International Airport","location":"Los Angeles, California, USA"},
    {"code":"NRT","name":"Narita International Airport","location":"Narita, Chiba, Japan"},
    {"code":"LHR","name":"Heathrow Airport","location":"London, England, UK"},
    {"code":"DXB","name":"Dubai International Airport","location":"Dubai, United Arab Emirates"},
    {"code":"SYD","name":"Sydney Kingsford Smith Airport","location":"Sydney, New South Wales, Australia"},
    {"code":"CDG","name":"Charles de Gaulle Airport","location":"Roissy-en-France, Île-de-France, France"},
    {"code":"JFK","name":"John F. Kennedy International Airport","location":"Queens, New York, USA"},
    {"code":"PEK","name":"Beijing Capital International Airport","location":"Beijing, China"},
    {"code":"GRU","name":"São Paulo/Guarulhos–Governador André Franco Montoro International Airport","location":"Guarulhos, São Paulo, Brazil"},
    {"code":"FRA","name":"Frankfurt Airport","location":"Frankfurt, Germany"},
    {"code":"SIN","name":"Singapore Changi Airport","location":"Singapore"},
    {"code":"HND","name":"Haneda Airport","location":"Tokyo, Japan"},
    {"code":"AMS","name":"Amsterdam Airport Schiphol","location":"Amsterdam, Netherlands"},
    {"code":"MAD","name":"Adolfo Suárez Madrid–Barajas Airport","location":"Madrid, Spain"},
    {"code":"BCN","name":"Barcelona–El Prat Airport","location":"Barcelona, Spain"},
    {"code":"MEX","name":"Mexico City International Airport","location":"Mexico City, Mexico"},
    {"code":"EZE","name":"Ministro Pistarini International Airport","location":"Buenos Aires, Argentina"},
    {"code":"GIG","name":"Rio de Janeiro–Galeão International Airport","location":"Rio de Janeiro, Brazil"},
    {"code":"SVO","name":"Sheremetyevo International Airport","location":"Moscow, Russia"},
    {"code":"DME","name":"Domodedovo International Airport","location":"Moscow, Russia"},
    {"code":"IST","name":"Istanbul Airport","location":"Istanbul, Turkey"},
    {"code":"JNB","name":"O. R. Tambo International Airport","location":"Johannesburg, South Africa"},
    {"code":"CPT","name":"Cape Town International Airport","location":"Cape Town, South Africa"},
    {"code":"LIM","name":"Jorge Chávez International Airport","location":"Lima, Peru"},
    {"code":"BOG","name":"El Dorado International Airport","location":"Bogotá, Colombia"},
    {"code":"SCL","name":"Comodoro Arturo Merino Benítez International Airport","location":"Santiago, Chile"},
    {"code":"YVR","name":"Vancouver International Airport","location":"Vancouver, Canada"},
    {"code":"YYZ","name":"Toronto Pearson International Airport","location":"Toronto, Canada"},
    {"code":"YUL","name":"Montréal–Pierre Elliott Trudeau International Airport","location":"Montreal, Canada"},
    {"code":"MIA","name":"Miami International Airport","location":"Miami, Florida, USA"},
    {"code":"ORD","name":"OHare International Airport","location":"Chicago, Illinois, USA"},
    {"code":"DFW","name":"Dallas/Fort Worth International Airport","location":"Dallas/Fort Worth, Texas, USA"},
    {"code":"ATL","name":"Hartsfield–Jackson Atlanta International Airport","location":"Atlanta, Georgia, USA"},
    {"code":"SEA","name":"Seattle–Tacoma International Airport","location":"Seattle, Washington, USA"},
    {"code":"BOS","name":"Logan International Airport","location":"Boston, Massachusetts, USA"},
    {"code":"IAD","name":"Washington Dulles International Airport","location":"Washington, D.C., USA"},
    {"code":"PHX","name":"Phoenix Sky Harbor International Airport","location":"Phoenix, Arizona, USA"},
    {"code":"IAH","name":"George Bush Intercontinental Airport","location":"Houston, Texas, USA"},
    {"code":"MSP","name":"Minneapolis–Saint Paul International Airport","location":"Minneapolis, Minnesota, USA"},
    {"code":"DTW","name":"Detroit Metropolitan Airport","location":"Detroit, Michigan, USA"},
    {"code":"FLL","name":"Fort Lauderdale–Hollywood International Airport","location":"Fort Lauderdale, Florida, USA"},
    {"code":"DEN","name":"Denver International Airport","location":"Denver, Colorado, USA"},
    {"code":"LAS","name":"McCarran International Airport","location":"Las Vegas, Nevada, USA"},
    {"code":"MCO","name":"Orlando International Airport","location":"Orlando, Florida, USA"},
    {"code":"SAN","name":"San Diego International Airport","location":"San Diego, California, USA"},
    {"code":"TPA","name":"Tampa International Airport","location":"Tampa, Florida, USA"},
    {"code":"PDX","name":"Portland International Airport","location":"Portland, Oregon, USA"},
    {"code":"PHL","name":"Philadelphia International Airport","location":"Philadelphia, Pennsylvania, USA"},
    {"code":"CLT","name":"Charlotte Douglas International Airport","location":"Charlotte, North Carolina, USA"},
    {"code":"SFO","name":"San Francisco International Airport","location":"San Francisco, California, USA"}
  ];  
  module.exports=airports;