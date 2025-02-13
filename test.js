var pos = require("./index");

var testString =
  "They are the most wired vehicles on the road, with dashboard computers, sophisticated radios, navigation systems and cellphones. While such gadgets are widely seen as distractions to be avoided behind the wheel, there are hundreds of thousands of drivers � police officers and paramedics � who are required to use them, sometimes at high speeds, while weaving through traffic, sirens blaring.  The drivers say the technology is a huge boon for their jobs, saving valuable seconds and providing instant access to essential information. But it also presents a clear risk � even the potential to take a life while they are trying to save one.  Philip Macaluso, a New York paramedic, recalled a moment recently when he was rushing to the hospital while keying information into his dashboard computer. At the last second, he looked up from the control panel and slammed on his brakes to avoid a woman who stepped into the street.  There is a potential for disaster here, Mr. Macaluso said. Data does not exist about crashes caused by police officers or medics distracted by their devices. But there are tragic anecdotes.  In April 2008, an emergency medical technician in West Nyack, N.Y., looked at his GPS screen, swerved and hit a parked flatbed truck. The crash sheared off the side of the ambulance and left his partner, who was in the passenger seat, paralyzed.  In June 2007, a sheriff's deputy in St. Clair County, Ill., was driving 35 miles per hour when a dispatcher radioed with an assignment. He entered the address into the mapping system and then looked up, too late to avoid hitting a sedan stopped in traffic. Its driver was seriously injured.  Ambulances and police cars are becoming increasingly wired. Some 75 percent of police cruisers have on-board computers, a figure that has doubled over the last decade, says David Krebs, an industry analyst with the VDC Research Group. He estimates about 30 percent of ambulances have such technology.  The use of such technology by so-called first responders comes as regulators, legislators and safety advocates seek to limit the use of gadgets by most drivers. Police officers, medics and others who study the field say they are searching to find the right balance between technology's risks and benefits.  The computers allow police, for example, to check license plate data, find information about a suspect and exchange messages with dispatchers. Ambulances receive directions to accident scenes and can use the computers to send information about the patient before they arrive at hospitals.  The technology is enormously beneficial, said Jeffrey Lindsey, a retired fire chief in Florida who now is an executive at the Health and Safety Institute, which provides continuing education for emergency services workers.  But he said first responders generally did not have enough training to deal with diversions that could be almost exponential compared with those faced by most drivers.  The New York Fire Department, which coordinates the city's largest ambulance system, said drivers were not supposed to use on-board computers in traffic. That is the role of the driver's partner, and if the partner is in the back tending to a patient, the driver is supposed to use devices before speeding off.  There's no need for our drivers to get distracted, because the system has evolved to keep safety paramount, said Jerry Gombo, assistant chief for emergency service operations at the Fire Department. Drivers do get into accidents, he said, but he couldn't remember a single one caused by distraction from using a computer.  He also estimates the technology saves 20 to 30 seconds per call. There's no doubt we're having quicker response time, Mr. Gombo added.  But in interviews, medics and E.M.T.'s in New York and elsewhere say that although they are aware of the rules, they do use their on-board computers while driving because they can't wait for certain information.  States that ban drivers from texting or using hand-held phones tend to exempt first responders. And in many places where even they are forbidden to use cellphones behind the wheel, the edict is often ignored.";

// shorter
// var testString = "This is some sample text. This text can contain multiple sentences. It also works with urls like http://google.com/.";

var lexer = new pos.Lexer();
var tagger = new pos.Tagger();
var start = new Date().getTime();
var words = lexer.lex(testString);
var tags = tagger.tag(words);
var end = new Date().getTime();
difference = end - start;
for (i in tags) {
  var tag = tags[i];
  console.log(tag[0] + " / " + tag[1]);
}
console.log(
  "Tokenized and tagged " +
    words.length +
    " words in " +
    difference +
    " milliseconds"
);
