export const eras = [
  { id: 1, name: "Pre-Reformation", shortName: "Pre-Reformation", dateRange: "1370–1517", color: [201,168,76], hexColor: "#C9A84C", description: "From Wycliffe's challenge to papal authority through Jan Hus's martyrdom to the eve of Luther's protest. Early reform movements questioned indulgences, demanded vernacular Scripture, and laid the groundwork for the upheaval to come.", keyTheme: "Seeds of reform" },
  { id: 2, name: "Lutheran Reformation", shortName: "Lutheran", dateRange: "1517–1555", color: [138,79,125], hexColor: "#8A4F7D", description: "Martin Luther's 95 Theses ignite the Reformation. The movement spreads through Germany, culminating in the Augsburg Confession and the Peace of Augsburg, which grants legal recognition to Lutheranism.", keyTheme: "Justification by faith alone" },
  { id: 3, name: "Reformed & Radical Reformation", shortName: "Reformed", dateRange: "1519–1598", color: [86,130,89], hexColor: "#568259", description: "Zwingli reforms Zurich, Calvin transforms Geneva, Knox reshapes Scotland. The Anabaptists press for radical separation of church and state. The Council of Trent launches the Counter-Reformation.", keyTheme: "Sola Scriptura applied" },
  { id: 4, name: "Post-Reformation & Legacy", shortName: "Post-Reformation", dateRange: "1598–1689", color: [163,75,75], hexColor: "#A34B4B", description: "The Thirty Years War devastates Europe. The Westminster Assembly codifies Reformed theology. The Synod of Dort settles the Arminian controversy. Puritanism flourishes in England.", keyTheme: "Confessional consolidation" },
];

export const eraIndex = {};
eras.forEach(e => { eraIndex[e.id] = e; });

export const locations = [
  { id: "oxford", name: "Oxford", modernName: "Oxford, England", region: "England", lat: 51.752, lng: -1.258, significance: "major", eras: [1], events: [
    { era: 1, order: 1, year: 1378, title: "Wycliffe Challenges Papal Authority", description: "John Wycliffe, Master of Balliol College, publishes 'De Civili Dominio' challenging the Pope's temporal authority. He organizes the first complete translation of the Bible into English and sends out itinerant 'Lollard' preachers across England.", figure: "John Wycliffe" },
  ]},
  { id: "lutterworth", name: "Lutterworth", modernName: "Lutterworth, Leicestershire", region: "England", lat: 52.453, lng: -1.200, significance: "moderate", eras: [1], events: [
    { era: 1, order: 2, year: 1384, title: "Wycliffe's Final Years", description: "Wycliffe retires to his rectory at Lutterworth where he continues writing until his death on 31 December 1384. His bones are later exhumed and burned by order of the Council of Constance in 1428.", figure: "John Wycliffe" },
  ]},
  { id: "prague", name: "Prague", modernName: "Prague, Czech Republic", region: "Bohemia", lat: 50.088, lng: 14.421, significance: "major", eras: [1], events: [
    { era: 1, order: 3, year: 1402, title: "Jan Hus Preaches at Bethlehem Chapel", description: "Jan Hus, rector of the University of Prague, begins preaching in Czech at the Bethlehem Chapel, drawing crowds of 3,000. Deeply influenced by Wycliffe's writings, he attacks clerical corruption and demands reform.", figure: "Jan Hus" },
  ]},
  { id: "konstanz", name: "Constance", modernName: "Konstanz, Germany", region: "Germany", lat: 47.661, lng: 9.175, significance: "major", eras: [1], events: [
    { era: 1, order: 4, year: 1415, title: "Jan Hus Burned at the Stake", description: "Despite a guarantee of safe conduct from Emperor Sigismund, Jan Hus is arrested, tried, and burned at the stake at the Council of Constance on 6 July 1415. His martyrdom galvanizes the Bohemian reform movement.", figure: "Jan Hus" },
  ]},
  { id: "lyon", name: "Lyon", modernName: "Lyon, France", region: "France", lat: 45.764, lng: 4.836, significance: "moderate", eras: [1], events: [
    { era: 1, order: 5, year: 1170, title: "Waldensian Movement Begins", description: "Peter Waldo, a wealthy merchant of Lyon, renounces his wealth and begins preaching apostolic poverty. The Waldensians produce vernacular translations of Scripture and establish communities across southern France and northern Italy.", figure: null },
  ]},
  { id: "rome", name: "Rome", modernName: "Rome, Italy", region: "Italy", lat: 41.903, lng: 12.496, significance: "major", eras: [1, 3], events: [
    { era: 1, order: 6, year: 1517, title: "Pope Leo X and Indulgences", description: "Pope Leo X authorizes the sale of indulgences to finance the rebuilding of St. Peter's Basilica. Johann Tetzel becomes the most aggressive seller. Luther's outrage at this practice triggers the 95 Theses.", figure: null },
    { era: 3, order: 14, year: 1540, title: "Jesuits Founded", description: "Pope Paul III approves the Society of Jesus (Jesuits), founded by Ignatius of Loyola. The Jesuits become the intellectual spearhead of the Counter-Reformation.", figure: null },
  ]},
  { id: "eisleben", name: "Eisleben", modernName: "Eisleben, Saxony-Anhalt", region: "Germany", lat: 51.527, lng: 11.548, significance: "moderate", eras: [2], events: [
    { era: 2, order: 1, year: 1483, title: "Martin Luther Born", description: "Martin Luther is born on 10 November 1483 in Eisleben, Saxony. He would later return to Eisleben and die there on 18 February 1546, having transformed the religious landscape of Europe.", figure: "Martin Luther" },
  ]},
  { id: "erfurt", name: "Erfurt", modernName: "Erfurt, Thuringia", region: "Germany", lat: 50.979, lng: 11.033, significance: "moderate", eras: [2], events: [
    { era: 2, order: 2, year: 1505, title: "Luther Enters the Augustinian Monastery", description: "After a terrifying thunderstorm, Luther enters the Augustinian monastery in Erfurt. His intense spiritual struggles over sin and God's righteousness drive him to study Scripture obsessively.", figure: "Martin Luther" },
  ]},
  { id: "wittenberg", name: "Wittenberg", modernName: "Wittenberg, Saxony-Anhalt", region: "Germany", lat: 51.867, lng: 12.643, significance: "major", eras: [2], events: [
    { era: 2, order: 3, year: 1517, title: "The 95 Theses", description: "On 31 October 1517, Martin Luther posts his 95 Theses on the door of the Castle Church in Wittenberg, challenging the sale of indulgences. The theses are quickly printed and distributed across Germany, igniting the Reformation.", figure: "Martin Luther" },
    { era: 2, order: 7, year: 1522, title: "Luther Returns from Wartburg", description: "Luther returns to Wittenberg from the Wartburg to quell radical disturbances. He preaches eight sermons in eight days (the Invocavit Sermons) restoring order.", figure: "Martin Luther" },
  ]},
  { id: "worms", name: "Worms", modernName: "Worms, Rhineland-Palatinate", region: "Germany", lat: 49.632, lng: 8.361, significance: "major", eras: [2], events: [
    { era: 2, order: 4, year: 1521, title: "Diet of Worms: 'Here I Stand'", description: "Luther appears before Emperor Charles V at the Diet of Worms and refuses to recant. He is declared an outlaw by the Edict of Worms, but Frederick the Wise arranges his protective 'kidnapping' to the Wartburg Castle.", figure: "Martin Luther" },
  ]},
  { id: "wartburg", name: "Wartburg Castle", modernName: "Eisenach, Thuringia", region: "Germany", lat: 50.967, lng: 10.307, significance: "major", eras: [2], events: [
    { era: 2, order: 5, year: 1521, title: "Luther Translates the New Testament", description: "In hiding at the Wartburg Castle disguised as 'Junker Jörg', Luther translates the entire New Testament from Greek into German in just 11 weeks. The 'September Testament' sells 5,000 copies in two months.", figure: "Martin Luther" },
  ]},
  { id: "speyer", name: "Speyer", modernName: "Speyer, Rhineland-Palatinate", region: "Germany", lat: 49.317, lng: 8.432, significance: "moderate", eras: [2], events: [
    { era: 2, order: 6, year: 1529, title: "The Protestation at Speyer", description: "At the Second Diet of Speyer, six princes and fourteen free cities issue a formal 'Protestation' against the Catholic majority's decision. This act gives the reform movement its lasting name: 'Protestantism'.", figure: null },
  ]},
  { id: "marburg", name: "Marburg", modernName: "Marburg, Hesse", region: "Germany", lat: 50.810, lng: 8.771, significance: "moderate", eras: [2], events: [
    { era: 2, order: 8, year: 1529, title: "Marburg Colloquy", description: "Philip of Hesse brings Luther and Zwingli together at the Marburg Colloquy. They agree on 14 of 15 articles but deadlock over the Lord's Supper. The failure prevents Protestant political unity.", figure: "Martin Luther" },
  ]},
  { id: "augsburg", name: "Augsburg", modernName: "Augsburg, Bavaria", region: "Germany", lat: 48.366, lng: 10.898, significance: "major", eras: [2], events: [
    { era: 2, order: 9, year: 1530, title: "The Augsburg Confession", description: "Philip Melanchthon presents the Augsburg Confession before Emperor Charles V — the foundational doctrinal statement of Lutheranism. It becomes the basis for the Peace of Augsburg (1555).", figure: "Philip Melanchthon" },
  ]},
  { id: "schmalkald", name: "Schmalkald", modernName: "Schmalkalden, Thuringia", region: "Germany", lat: 50.727, lng: 10.448, significance: "moderate", eras: [2], events: [
    { era: 2, order: 10, year: 1531, title: "Schmalkaldic League Formed", description: "Protestant princes form the Schmalkaldic League as a military alliance to defend the Reformation against Emperor Charles V.", figure: null },
  ]},
  { id: "nuremberg", name: "Nuremberg", modernName: "Nuremberg, Bavaria", region: "Germany", lat: 49.452, lng: 11.077, significance: "moderate", eras: [2], events: [
    { era: 2, order: 11, year: 1524, title: "Nuremberg Adopts the Reformation", description: "The free imperial city of Nuremberg becomes one of the first major cities to officially adopt Lutheranism. The city's printing industry helps spread Reformation ideas across southern Germany.", figure: null },
  ]},
  { id: "zurich", name: "Zurich", modernName: "Zurich, Switzerland", region: "Switzerland", lat: 47.377, lng: 8.541, significance: "major", eras: [3], events: [
    { era: 3, order: 1, year: 1523, title: "Zwingli's Reformation of Zurich", description: "Huldrych Zwingli persuades the Zurich city council to adopt reform. Images are removed from churches, monasteries dissolved, and the Mass replaced with a simple communion service.", figure: "Huldrych Zwingli" },
  ]},
  { id: "noyon", name: "Noyon", modernName: "Noyon, Picardy, France", region: "France", lat: 49.581, lng: 3.001, significance: "moderate", eras: [3], events: [
    { era: 3, order: 2, year: 1509, title: "John Calvin Born", description: "Jean Cauvin (John Calvin) is born on 10 July 1509 in Noyon, Picardy. His sudden conversion around 1533 leads him to flee France and eventually settle in Geneva.", figure: "John Calvin" },
  ]},
  { id: "geneva", name: "Geneva", modernName: "Geneva, Switzerland", region: "Switzerland", lat: 46.204, lng: 6.144, significance: "major", eras: [3], events: [
    { era: 3, order: 3, year: 1541, title: "Calvin Establishes the Genevan Church", description: "Calvin returns to Geneva and implements the Ecclesiastical Ordinances. The Geneva Academy (1559) trains Reformed ministers who spread Calvinism across Europe. John Knox calls Geneva 'the most perfect school of Christ since the Apostles'.", figure: "John Calvin" },
  ]},
  { id: "strasbourg", name: "Strasbourg", modernName: "Strasbourg, France", region: "France", lat: 48.574, lng: 7.753, significance: "moderate", eras: [3], events: [
    { era: 3, order: 4, year: 1538, title: "Bucer's Reformation of Strasbourg", description: "Martin Bucer leads the Reformation in Strasbourg. During Calvin's exile from Geneva (1538-41), Bucer mentors the young reformer, profoundly shaping his ecclesiology.", figure: "Martin Bucer" },
  ]},
  { id: "edinburgh", name: "Edinburgh", modernName: "Edinburgh, Scotland", region: "Scotland", lat: 55.951, lng: -3.189, significance: "major", eras: [3], events: [
    { era: 3, order: 5, year: 1560, title: "Knox and the Scottish Reformation", description: "John Knox leads the Scottish Reformation to triumph. The Scottish Parliament adopts the Scots Confession and abolishes papal authority. Knox establishes a Presbyterian system of church government.", figure: "John Knox" },
  ]},
  { id: "st-andrews", name: "St Andrews", modernName: "St Andrews, Fife", region: "Scotland", lat: 56.340, lng: -2.795, significance: "moderate", eras: [3], events: [
    { era: 3, order: 6, year: 1547, title: "Knox at St Andrews Castle", description: "John Knox joins the Protestant garrison at St Andrews Castle. When it falls to French forces, Knox is captured and sentenced to 19 months as a galley slave.", figure: "John Knox" },
  ]},
  { id: "munster", name: "Münster", modernName: "Münster, Westphalia", region: "Germany", lat: 51.961, lng: 7.629, significance: "moderate", eras: [3], events: [
    { era: 3, order: 7, year: 1534, title: "The Münster Rebellion", description: "Radical Anabaptists seize control of Münster and establish a theocratic commune under Jan van Leiden. The siege and collapse discredits radical Anabaptism. Menno Simons later gathers the peaceful remnant.", figure: "Menno Simons" },
  ]},
  { id: "antwerp", name: "Antwerp", modernName: "Antwerp, Belgium", region: "Netherlands", lat: 51.219, lng: 4.402, significance: "moderate", eras: [3], events: [
    { era: 3, order: 8, year: 1535, title: "Tyndale's Martyrdom", description: "William Tyndale, translator of the New Testament into English, is arrested near Antwerp and burned at the stake on 6 October 1536. His dying words: 'Lord, open the King of England's eyes!'", figure: "William Tyndale" },
  ]},
  { id: "trent", name: "Trent", modernName: "Trento, Italy", region: "Italy", lat: 46.067, lng: 11.117, significance: "major", eras: [3], events: [
    { era: 3, order: 9, year: 1545, title: "Council of Trent Opens", description: "The Council of Trent (1545-1563) launches the Counter-Reformation. Meeting in 25 sessions over 18 years, it reaffirms Catholic doctrines and addresses genuine abuses.", figure: null },
  ]},
  { id: "heidelberg", name: "Heidelberg", modernName: "Heidelberg, Baden-Württemberg", region: "Germany", lat: 49.398, lng: 8.672, significance: "moderate", eras: [3], events: [
    { era: 3, order: 10, year: 1563, title: "The Heidelberg Catechism", description: "Elector Frederick III commissions the Heidelberg Catechism, organized around guilt, grace, and gratitude. It becomes one of the most beloved Reformed confessions.", figure: null },
  ]},
  { id: "paris", name: "Paris", modernName: "Paris, France", region: "France", lat: 48.857, lng: 2.352, significance: "major", eras: [3], events: [
    { era: 3, order: 11, year: 1572, title: "St. Bartholomew's Day Massacre", description: "On 24 August 1572, Catholic mobs slaughter thousands of Huguenots in Paris. Admiral Gaspard de Coligny is among the first killed. An estimated 10,000-30,000 Protestants are killed across France.", figure: "Gaspard de Coligny" },
  ]},
  { id: "la-rochelle", name: "La Rochelle", modernName: "La Rochelle, France", region: "France", lat: 46.160, lng: -1.152, significance: "moderate", eras: [3], events: [
    { era: 3, order: 12, year: 1573, title: "Huguenot Stronghold", description: "La Rochelle serves as the principal Huguenot fortress in France, withstanding major sieges. Cardinal Richelieu finally starves it into submission in 1628.", figure: null },
  ]},
  { id: "emden", name: "Emden", modernName: "Emden, Lower Saxony", region: "Germany", lat: 53.367, lng: 7.206, significance: "moderate", eras: [3], events: [
    { era: 3, order: 13, year: 1571, title: "Synod of Emden", description: "The Synod of Emden organizes Dutch Reformed churches-in-exile into a presbyterian-synodal system. Known as the 'mother church of the Dutch Reformation'.", figure: null },
  ]},
  { id: "westminster", name: "Westminster", modernName: "Westminster, London", region: "England", lat: 51.499, lng: -0.125, significance: "major", eras: [4], events: [
    { era: 4, order: 1, year: 1643, title: "The Westminster Assembly", description: "The English Parliament convenes the Westminster Assembly at Westminster Abbey. Over six years, 121 ministers produce the Westminster Confession of Faith, Larger and Shorter Catechisms — doctrinal standards for Presbyterian and Reformed churches worldwide.", figure: null },
  ]},
  { id: "dordrecht", name: "Dordrecht", modernName: "Dordrecht, Netherlands", region: "Netherlands", lat: 51.813, lng: 4.669, significance: "major", eras: [4], events: [
    { era: 4, order: 2, year: 1618, title: "Synod of Dort", description: "The Synod of Dort (1618-19) settles the Arminian controversy. Delegates from Reformed churches across Europe affirm what becomes known as the 'Five Points of Calvinism' (TULIP).", figure: null },
  ]},
  { id: "leiden", name: "Leiden", modernName: "Leiden, Netherlands", region: "Netherlands", lat: 52.160, lng: 4.494, significance: "moderate", eras: [4], events: [
    { era: 4, order: 3, year: 1609, title: "Pilgrim Fathers in Leiden", description: "English Separatists settle in Leiden under pastor John Robinson. A portion later sails to the New World on the Mayflower (1620), founding Plymouth Colony.", figure: null },
  ]},
  { id: "magdeburg", name: "Magdeburg", modernName: "Magdeburg, Saxony-Anhalt", region: "Germany", lat: 52.131, lng: 11.637, significance: "moderate", eras: [4], events: [
    { era: 4, order: 4, year: 1550, title: "The Magdeburg Confession", description: "Lutheran pastors in besieged Magdeburg articulate a doctrine of resistance against tyrannical rulers — the right of lesser magistrates to resist. This becomes foundational for Protestant resistance theory.", figure: null },
  ]},
];

export const routes = [
  { era: 1, path: [[-1.258, 51.752], [-1.200, 52.453], [14.421, 50.088], [9.175, 47.661]] },
  { era: 2, path: [[11.548, 51.527], [11.033, 50.979], [12.643, 51.867], [8.361, 49.632], [10.307, 50.967], [12.643, 51.867]] },
  { era: 2, path: [[8.432, 49.317], [8.771, 50.810], [10.898, 48.366], [10.448, 50.727]] },
  { era: 3, path: [[8.541, 47.377], [6.144, 46.204], [7.753, 48.574], [-3.189, 55.951]] },
  { era: 3, path: [[3.001, 49.581], [6.144, 46.204], [7.753, 48.574]] },
  { era: 3, path: [[4.402, 51.219], [7.629, 51.961], [7.206, 53.367]] },
  { era: 3, path: [[11.117, 46.067], [12.496, 41.903], [2.352, 48.857]] },
  { era: 4, path: [[-0.125, 51.499], [4.669, 51.813], [4.494, 52.160]] },
];

export const figures = [
  { id: "wycliffe", name: "John Wycliffe", years: "c. 1328–1384", role: "Morning Star of the Reformation", bio: "Oxford theologian who challenged papal authority, denounced transubstantiation, and organized the first complete English Bible translation. His Lollard followers carried reform ideas across England." },
  { id: "hus", name: "Jan Hus", years: "c. 1372–1415", role: "Bohemian Reformer & Martyr", bio: "Rector of the University of Prague who preached reform in Czech. Burned at Constance despite a safe-conduct guarantee. His martyrdom sparked the Hussite Wars." },
  { id: "luther", name: "Martin Luther", years: "1483–1546", role: "Father of the Reformation", bio: "Augustinian monk whose 95 Theses against indulgences ignited the Reformation. His doctrine of justification by faith alone and translated Bible reshaped Western Christianity." },
  { id: "melanchthon", name: "Philip Melanchthon", years: "1497–1560", role: "Luther's Intellectual Partner", bio: "Brilliant humanist who authored the Augsburg Confession and systematized Lutheran theology. Known as 'Praeceptor Germaniae' (Teacher of Germany)." },
  { id: "zwingli", name: "Huldrych Zwingli", years: "1484–1531", role: "Reformer of Zurich", bio: "Swiss reformer who independently arrived at Protestant convictions. Killed at the Battle of Kappel (1531) while serving as chaplain to Zurich's forces." },
  { id: "calvin", name: "John Calvin", years: "1509–1564", role: "Theologian of Geneva", bio: "French reformer whose 'Institutes of the Christian Religion' became the most influential systematic theology of the Reformation. His Geneva Academy trained ministers who spread Reformed faith across Europe." },
  { id: "knox", name: "John Knox", years: "c. 1514–1572", role: "Father of Scottish Presbyterianism", bio: "Former galley slave who became the thundering voice of the Scottish Reformation. Established Presbyterian church government and shaped Scotland's identity." },
  { id: "bucer", name: "Martin Bucer", years: "1491–1551", role: "Reformer of Strasbourg", bio: "Dominican-turned-reformer who mentored Calvin and sought unity between Lutherans and Reformed. Later influenced the English Reformation from Cambridge." },
  { id: "cranmer", name: "Thomas Cranmer", years: "1489–1556", role: "Archbishop of Canterbury", bio: "Architect of the English Reformation who authored the Book of Common Prayer. Burned at the stake under Mary I, famously thrusting his recanting hand into the fire first." },
  { id: "tyndale", name: "William Tyndale", years: "c. 1494–1536", role: "Translator of the English Bible", bio: "Scholar who translated the New Testament from Greek into English. Strangled and burned near Antwerp. His translation forms the foundation of the King James Bible." },
  { id: "beza", name: "Theodore Beza", years: "1519–1605", role: "Calvin's Successor in Geneva", bio: "French nobleman who became Calvin's successor at the Geneva Academy. Defended Reformed orthodoxy and contributed critical editions of the Greek New Testament." },
  { id: "menno", name: "Menno Simons", years: "1496–1561", role: "Leader of Peaceful Anabaptism", bio: "Former Catholic priest who gathered scattered Anabaptists after the Münster debacle into peaceful communities emphasizing adult baptism and nonresistance." },
  { id: "bullinger", name: "Heinrich Bullinger", years: "1504–1575", role: "Zwingli's Successor in Zurich", bio: "Led Zurich's church for 44 years. Authored the Second Helvetic Confession (1566) and maintained a vast correspondence network connecting Reformed churches across Europe." },
  { id: "coligny", name: "Gaspard de Coligny", years: "1519–1572", role: "Huguenot Leader & Admiral", bio: "Admiral of France who became the political leader of the French Huguenots. Assassinated in the St. Bartholomew's Day Massacre." },
  { id: "vermigli", name: "Peter Martyr Vermigli", years: "1499–1562", role: "Italian Reformed Theologian", bio: "Augustinian prior who converted to Protestantism and fled Italy. Taught at Strasbourg, Oxford, and Zurich." },
];

export const timeline = [
  { year: 1170, era: 1, title: "Waldensian Movement", locationId: "lyon", locationName: "Lyon" },
  { year: 1378, era: 1, title: "Wycliffe Challenges Rome", locationId: "oxford", locationName: "Oxford" },
  { year: 1384, era: 1, title: "Wycliffe Dies", locationId: "lutterworth", locationName: "Lutterworth" },
  { year: 1402, era: 1, title: "Hus Preaches in Prague", locationId: "prague", locationName: "Prague" },
  { year: 1415, era: 1, title: "Hus Burned at Constance", locationId: "konstanz", locationName: "Constance" },
  { year: 1483, era: 2, title: "Luther Born", locationId: "eisleben", locationName: "Eisleben" },
  { year: 1505, era: 2, title: "Luther Enters Monastery", locationId: "erfurt", locationName: "Erfurt" },
  { year: 1517, era: 2, title: "95 Theses Posted", locationId: "wittenberg", locationName: "Wittenberg" },
  { year: 1521, era: 2, title: "Diet of Worms", locationId: "worms", locationName: "Worms" },
  { year: 1521, era: 2, title: "Luther at the Wartburg", locationId: "wartburg", locationName: "Wartburg Castle" },
  { year: 1523, era: 3, title: "Zurich Reformed", locationId: "zurich", locationName: "Zurich" },
  { year: 1524, era: 2, title: "Nuremberg Adopts Reform", locationId: "nuremberg", locationName: "Nuremberg" },
  { year: 1529, era: 2, title: "Protestation at Speyer", locationId: "speyer", locationName: "Speyer" },
  { year: 1529, era: 2, title: "Marburg Colloquy", locationId: "marburg", locationName: "Marburg" },
  { year: 1530, era: 2, title: "Augsburg Confession", locationId: "augsburg", locationName: "Augsburg" },
  { year: 1531, era: 2, title: "Schmalkaldic League", locationId: "schmalkald", locationName: "Schmalkald" },
  { year: 1534, era: 3, title: "Münster Rebellion", locationId: "munster", locationName: "Münster" },
  { year: 1535, era: 3, title: "Tyndale Martyred", locationId: "antwerp", locationName: "Antwerp" },
  { year: 1538, era: 3, title: "Bucer's Strasbourg", locationId: "strasbourg", locationName: "Strasbourg" },
  { year: 1541, era: 3, title: "Calvin Returns to Geneva", locationId: "geneva", locationName: "Geneva" },
  { year: 1545, era: 3, title: "Council of Trent", locationId: "trent", locationName: "Trent" },
  { year: 1547, era: 3, title: "Knox at St Andrews", locationId: "st-andrews", locationName: "St Andrews" },
  { year: 1550, era: 4, title: "Magdeburg Confession", locationId: "magdeburg", locationName: "Magdeburg" },
  { year: 1560, era: 3, title: "Scottish Reformation", locationId: "edinburgh", locationName: "Edinburgh" },
  { year: 1563, era: 3, title: "Heidelberg Catechism", locationId: "heidelberg", locationName: "Heidelberg" },
  { year: 1571, era: 3, title: "Synod of Emden", locationId: "emden", locationName: "Emden" },
  { year: 1572, era: 3, title: "St. Bartholomew Massacre", locationId: "paris", locationName: "Paris" },
  { year: 1573, era: 3, title: "La Rochelle Siege", locationId: "la-rochelle", locationName: "La Rochelle" },
  { year: 1609, era: 4, title: "Pilgrims in Leiden", locationId: "leiden", locationName: "Leiden" },
  { year: 1618, era: 4, title: "Synod of Dort", locationId: "dordrecht", locationName: "Dordrecht" },
  { year: 1643, era: 4, title: "Westminster Assembly", locationId: "westminster", locationName: "Westminster" },
];