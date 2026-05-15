const DAILY_CONTENT = [
  {
    day: 1,
    principle: 'Self-governance',
    hook: 'The Declaration didn\'t just start a revolution. It made a claim about human beings that no government had ever legally recognized before.',
    quote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.',
    quoteAttr: 'Thomas Jefferson, Declaration of Independence, 1776',
    context: 'Jefferson didn\'t invent these ideas — he synthesized them. John Locke had argued that governments exist to protect natural rights, and that when they fail, the people may alter or abolish them. Jefferson took that philosophical argument and turned it into a legal indictment with 27 specific charges against the Crown. In five paragraphs, he did what no political document had done before: grounded a revolution in a theory of human nature, not just grievance.',
    relevance: 'Every American reform movement — abolition, suffrage, civil rights — made its case by pointing back to this sentence. Lincoln called it a "standard maxim for free society." The Declaration isn\'t just a founding document. It\'s the moral standard by which the republic has always been judged.',
    digDeeper: [
      { title: 'The full Declaration — all 27 grievances', description: 'What Jefferson\'s indictment of the Crown actually said, charge by charge' },
      { title: 'John Locke — the philosopher Jefferson borrowed from', description: 'The Second Treatise of Government and the theory of natural rights' },
      { title: 'The Committee of Five', description: 'Who else shaped the Declaration before Jefferson put pen to paper' },
      { title: 'What "pursuit of happiness" actually meant in 1776', description: 'The phrase had a specific philosophical meaning that\'s been largely forgotten' },
      { title: 'The Declaration\'s global reach', description: 'How Jefferson\'s words spread to other revolutions and constitutions around the world' }
    ]
  },
  {
    day: 2,
    principle: 'Freedom of speech',
    hook: 'Congress shall make no law. Four words that protect the most uncomfortable, inconvenient speech — because the founders knew comfortable speech doesn\'t need protection.',
    quote: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.',
    quoteAttr: 'First Amendment to the U.S. Constitution, ratified 1791',
    context: 'The First Amendment wasn\'t in the original Constitution. Anti-Federalists demanded it as the price of ratification. Madison — who had initially opposed a Bill of Rights — eventually championed it in Congress. The founders had lived under the Sedition Act of 1798, which criminalized criticism of the government. They knew how quickly speech protections could erode without explicit constitutional backing.',
    relevance: 'The First Amendment is a limit on government, not on private actors. "Congress shall make no law" means the state cannot punish your speech — it says nothing about platforms, employers, or social consequences. That distinction matters more now than ever.',
    digDeeper: [
      { title: 'The Alien and Sedition Acts', description: 'When the founders tested their own principles and criminalized political criticism' },
      { title: 'Madison\'s original draft of the First Amendment', description: 'How the language evolved before reaching its final form' },
      { title: 'The Zenger trial (1735)', description: 'The colonial free-press case that shaped the founders\' thinking' },
      { title: 'What "freedom of the press" meant to an 18th-century printer', description: 'Pamphlets, broadsides, and the mechanics of founding-era publishing' },
      { title: 'Seditious libel — the British law they were abolishing', description: 'The specific legal doctrine the First Amendment was designed to end' }
    ]
  },
  {
    day: 3,
    principle: 'Separation of powers',
    hook: 'The founders didn\'t just distrust kings. They distrusted every concentration of power — including the one they were creating.',
    quote: 'Ambition must be made to counteract ambition... If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary.',
    quoteAttr: 'James Madison, Federalist No. 51, 1788',
    context: 'Madison was making the case for the Constitution\'s three-branch design. He had studied every republic in history and concluded they all failed the same way — power collected, then corrupted. His solution was structural: pit the branches against each other so that no single faction could dominate. This wasn\'t cynicism — it was realism about human nature built into law.',
    relevance: 'When any branch overreaches — executive orders, legislative abdication, judicial activism — Madison\'s warning is the correct framework for the debate. Not partisan outrage. Constitutional structure.',
    digDeeper: [
      { key: 'madison-profile', title: 'James Madison — Father of the Constitution', description: 'His life, beliefs, contradictions, and why Federalist 51 is his masterwork' },
      { key: 'federalist-51', title: 'Full text: Federalist No. 51', description: 'Read Madison\'s complete argument for checks and balances' },
      { key: 'montesquieu', title: 'Montesquieu\'s influence on Madison', description: 'The French philosopher whose ideas crossed the Atlantic and shaped the three-branch design' },
      { key: 'crown-abuses', title: 'The abuses this system was designed to prevent', description: 'What the founders had witnessed firsthand under the Crown' },
      { key: 'anti-federalist', title: 'Anti-Federalist Papers — the other side', description: 'What the Constitution\'s opponents feared, and whether they were right' }
    ]
  },
  {
    day: 4,
    principle: 'Religious liberty',
    hook: 'Jefferson\'s "wall of separation" — the most quoted, most misunderstood phrase in American constitutional history. Here is what he actually wrote, and why a Baptist congregation asked him to write it.',
    quote: 'Believing with you that religion is a matter which lies solely between Man & his God... I contemplate with sovereign reverence that act of the whole American people which declared that their legislature should make no law respecting an establishment of religion, or prohibiting the free exercise thereof, thus building a wall of separation between Church & State.',
    quoteAttr: 'Thomas Jefferson, Letter to the Danbury Baptist Association, 1802',
    context: 'The Danbury Baptists were a religious minority in Connecticut — a state with an established church that taxed dissenters. They wrote to President Jefferson seeking assurance. His reply gave them the phrase that has shaped First Amendment jurisprudence ever since. Jefferson\'s wall was not secular hostility to religion. It was a protection for religion from government.',
    relevance: 'The "separation of church and state" is misunderstood in both directions — used to argue religion has no place in public life, and used to argue government may favor particular traditions. Jefferson\'s letter is the primary source that clarifies what the founders actually intended.',
    digDeeper: [
      { title: 'The Danbury Baptists — who they were and why they wrote', description: 'A religious minority seeking protection from a state-established church' },
      { title: 'Virginia Statute for Religious Freedom', description: 'Jefferson\'s earlier model for the First Amendment religion clauses' },
      { title: 'Establishment vs. free exercise — when the clauses conflict', description: 'The two religion clauses and how courts have balanced them' },
      { title: 'Patrick Henry\'s competing vision', description: 'The argument for a Christian commonwealth that Jefferson\'s statute defeated' },
      { title: 'Roger Williams — Jefferson\'s predecessor by 150 years', description: 'The colonial founder of Rhode Island who anticipated the wall of separation' }
    ]
  },
  {
    day: 5,
    principle: 'Property rights',
    hook: 'Madison\'s definition of property was broader than land and money. He thought your conscience, your opinions, and your labor were property too — and government had no right to take them.',
    quote: 'As a man is said to have a right to his property, he may be equally said to have a property in his rights. Where an excess of power prevails, property of no sort is duly respected. No man is safe in his opinions, his person, his faculties, or his possessions.',
    quoteAttr: 'James Madison, "Property," National Gazette, 1792',
    context: 'Madison wrote this essay for a Philadelphia newspaper in 1792, arguing against Hamilton\'s vision of an activist federal government. For Madison, the right to property was inseparable from all other rights — because the same government that could seize your land could seize your liberty. Property wasn\'t just wealth; it was the material foundation of independence.',
    relevance: 'The Fifth Amendment\'s takings clause — "nor shall private property be taken for public use, without just compensation" — reflects exactly this concern. Madison\'s broader point stands: economic freedom and political freedom are not separate categories. The founders understood them as inseparable.',
    digDeeper: [
      { title: 'The Fifth Amendment takings clause', description: 'The text, history, and what "public use" has come to mean' },
      { title: 'Hamilton vs. Madison — the first great economic debate', description: 'Two visions for the American economy that still define the argument' },
      { title: 'John Locke on labor and property', description: 'The philosophical source Madison was drawing from' },
      { title: 'What "property in rights" meant in 18th-century thought', description: 'A concept that connected economic and civil liberties as one' },
      { title: 'Eminent domain today', description: 'How courts have applied and expanded the founders\' property framework' }
    ]
  },
  {
    day: 6,
    principle: 'Federalism',
    hook: 'The federal government was supposed to be the exception, not the rule. The states were supposed to be the center of American life. Madison said so plainly — and then the republic slowly forgot it.',
    quote: 'The powers delegated by the proposed Constitution to the federal government are few and defined. Those which are to remain in the State governments are numerous and indefinite.',
    quoteAttr: 'James Madison, Federalist No. 45, 1788',
    context: 'Madison wrote Federalist 45 to reassure skeptical readers that the new Constitution would not swallow the states. The Tenth Amendment codified his promise in 1791: powers not delegated to the federal government are reserved to the states or the people. What Madison did not anticipate was how broadly the Commerce Clause and the Necessary and Proper Clause would eventually be interpreted.',
    relevance: 'Every major political conflict — from slavery to healthcare to education — involves the same question Madison was answering in 1788: who decides? The balance he described looks very different from the federal-state relationship that exists today. Whether that shift is adaptation or drift is the central question of American federalism.',
    digDeeper: [
      { title: 'The Tenth Amendment — the constitutional text of federalism', description: 'What it says, what it means, and its limits' },
      { title: 'The Articles of Confederation — why the first system failed', description: 'The government that made the Constitution necessary' },
      { title: 'The Commerce Clause — how it grew', description: 'From "regulate trade" to "regulate almost everything"' },
      { title: 'The New Deal and federal expansion', description: 'The moment Madison\'s "few and defined" powers were most dramatically redrawn' },
      { title: 'Anti-Federalist fears about the federal government', description: 'The warnings from 1788 that proved more prescient than the reassurances' }
    ]
  },
  {
    day: 7,
    principle: 'Civic virtue',
    hook: 'Adams believed liberty required something from citizens — not just rights, but the knowledge and character to exercise them. A republic that produces ignorant citizens, he said, will not stay a republic.',
    quote: 'Liberty cannot be preserved without a general knowledge among the people, who have a right... and a desire to know; but besides this, they have a right, an indisputable, unalienable, indefeasible, divine right to that most dreaded and envied kind of knowledge — I mean of the characters and conduct of their rulers.',
    quoteAttr: 'John Adams, A Dissertation on the Canon and Feudal Law, 1765',
    context: 'Adams wrote this in 1765 — eleven years before the Declaration — watching the Stamp Act crisis unfold. He was making a philosophical case that tyranny survives by keeping people ignorant, and that liberty requires citizens who actively seek to know. The Puritan tradition of education-for-self-governance shaped his thinking: New England\'s town schools existed specifically so citizens could read the laws that governed them.',
    relevance: 'Adams\' insight is also a warning: a republic whose citizens don\'t know their own history is a republic that cannot defend itself against those who would rewrite it. Every argument for civic education in America traces back to this tradition.',
    digDeeper: [
      { title: 'John Adams — the most underrated founder', description: 'His life, his principles, and why history has undervalued him' },
      { title: 'The Stamp Act — the crisis that produced this essay', description: 'What it was, why it mattered, and why the colonists erupted' },
      { title: 'New England\'s civic education tradition', description: 'Schools as republican institutions — education for self-governance' },
      { title: 'Madison on an informed citizenry', description: '"Knowledge will forever govern ignorance" — the companion argument' },
      { title: 'Tocqueville on American civic culture', description: 'What a French observer saw in American civic life in 1831' }
    ]
  },
  {
    day: 8,
    principle: 'Constitutional union',
    hook: 'Washington had a word for what America would become without the Constitution. He called it thirteen quarreling nations. He\'d seen it almost happen.',
    quote: 'We are either a united people, or we are not. If the former, let us, in all matters of general concern act as a nation, which have national objects to promote, and a national character to support.',
    quoteAttr: 'George Washington, Letter to James Madison, November 30, 1785',
    context: 'Washington wrote this two years before the Constitutional Convention, watching the Articles of Confederation collapse. States were imposing tariffs on each other, refusing to honor national debts, ignoring federal requisitions. Shays\' Rebellion — a debt crisis turned armed uprising — would follow the next year. Washington had fought eight years to create a nation and was watching it dissolve into thirteen competing interests. The Constitution was a response to a crisis already underway.',
    relevance: 'The founders didn\'t see union as inevitable. They had to build it, argue for it, and ratify it by the skin of their teeth — New York and Virginia nearly voted no. The precariousness of that founding moment is a reminder that the constitutional order requires active maintenance, not passive assumption.',
    digDeeper: [
      { title: 'The Articles of Confederation — what failed and why', description: 'The first American government and its fatal structural flaws' },
      { title: 'Shays\' Rebellion', description: 'The debt crisis that convinced Washington the Constitution was necessary' },
      { title: 'The Constitutional Convention — who was there', description: 'Fifty-five men, four months, one document — and what almost went wrong' },
      { title: 'The ratification fight', description: 'New York and Virginia\'s near-rejection and the argument that saved it' },
      { title: 'Washington\'s role at the Convention', description: 'Why his presence as presiding officer made ratification possible' }
    ]
  },
  {
    day: 9,
    principle: 'Checks and balances',
    hook: 'Madison didn\'t trust virtuous men to govern virtuously. He built a system that didn\'t require them to.',
    quote: 'In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.',
    quoteAttr: 'James Madison, Federalist No. 51, 1788',
    context: 'Federalist 51 was published February 6, 1788, as New York debated ratification. Madison\'s argument was engineering, not idealism: don\'t hope for good men — build a system that constrains bad ones. Each branch would be given tools to resist the others. The Senate could block the president. The House controlled the purse. The courts could void unconstitutional laws. The competition between branches was the design, not a flaw.',
    relevance: 'When a president bypasses Congress, when Congress abdicates oversight, when courts legislate from the bench — Madison\'s framework is the right vocabulary for the argument. Not partisan outrage. Constitutional structure asking whether the machinery is working as designed.',
    digDeeper: [
      { title: 'The three branches — how each check works in practice', description: 'Veto, confirmation, impeachment, appropriation — the specific tools' },
      { title: 'The veto — Hamilton\'s defense in Federalist No. 73', description: 'Why an executive check on the legislature was considered essential' },
      { title: 'Congressional oversight', description: 'The power of investigation and appropriation — and when it goes unused' },
      { title: 'Judicial review — where it actually comes from', description: 'It\'s not in the Constitution\'s text. Marbury v. Madison is the story.' },
      { title: 'When checks fail — historical examples', description: 'Branch overreach across American history and what corrected it' }
    ]
  },
  {
    day: 10,
    principle: 'The Bill of Rights',
    hook: 'Madison initially opposed the Bill of Rights. Jefferson changed his mind — from Paris, by letter, across two years of argument.',
    quote: 'A bill of rights is what the people are entitled to against every government on earth, general or particular, and what no just government should refuse, or rest on inference.',
    quoteAttr: 'Thomas Jefferson, Letter to James Madison, December 20, 1787',
    context: 'Jefferson was in Paris serving as American minister when the Constitution was drafted. He wrote this letter three months after the Convention, arguing that the omission of a Bill of Rights was the document\'s greatest flaw. Madison\'s original objection — that enumerated rights might imply others weren\'t protected — was answered by Jefferson: put them in writing anyway. Madison eventually came around and shepherded the Bill of Rights through the First Congress in 1789.',
    relevance: 'The Bill of Rights was not inevitable. It took a sustained argument between two brilliant men — separated by an ocean — to produce the document that now protects American freedoms. Understanding the debate behind it makes the rights themselves more legible.',
    digDeeper: [
      { title: 'Madison\'s original objections — and why he changed his mind', description: 'The intellectual journey from opponent to author of the Bill of Rights' },
      { title: 'The first ten amendments — each one and what it was reacting to', description: 'Every amendment was a response to a specific British or government abuse' },
      { title: 'The Ninth Amendment — the rights not listed', description: 'Madison\'s answer to his own earlier objection about enumeration' },
      { title: 'The Anti-Federalists\' demand', description: 'How the losers of ratification won the most important concession' },
      { title: 'How the Bill of Rights was extended to the states', description: 'The 14th Amendment and incorporation — a post-Civil War revolution' }
    ]
  },
  {
    day: 11,
    principle: 'First Amendment',
    hook: 'Five freedoms. One sentence. And the most litigated clause in American constitutional history.',
    quote: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.',
    quoteAttr: 'First Amendment, ratified December 15, 1791',
    context: 'The First Amendment protected five distinct rights — religion, speech, press, assembly, and petition. Each was a response to specific British abuses: established churches that taxed dissenters, seditious libel prosecutions, press licensing requirements, prohibitions on public gatherings, and suppression of colonial petitions to Parliament. The amendment\'s brevity was deliberate — the founders wanted the protection broad, not hedged with exceptions.',
    relevance: 'The First Amendment is a floor, not a ceiling. States can provide broader protections. But the federal guarantee — "Congress shall make no law" — remains the baseline against which all government speech restrictions are measured. Every generation has to decide how seriously it means it.',
    digDeeper: [
      { title: 'Seditious libel — the British law they were abolishing', description: 'The doctrine that made criticizing the government a crime' },
      { title: 'The Alien and Sedition Acts of 1798', description: 'The founders\' first violation of their own First Amendment principles' },
      { title: 'Prior restraint — what it means and why founders feared it', description: 'Government preventing speech before it happens, not punishing it after' },
      { title: 'The press in the founding era', description: 'Pamphlets, broadsides, and newspapers that were openly partisan and often vicious' },
      { title: 'Petition and assembly — the forgotten rights', description: 'Two First Amendment protections that rarely get the attention they deserve' }
    ]
  },
  {
    day: 12,
    principle: 'The right to bear arms',
    hook: 'Four dependent clauses. Two rights. And 230 years of argument about what exactly the founders meant.',
    quote: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.',
    quoteAttr: 'Second Amendment, ratified December 15, 1791',
    context: 'The founders distrusted standing armies — professional military forces loyal to the government rather than the people. The militia model, where citizen-soldiers took up arms when needed, was their preferred alternative. The amendment\'s language has generated centuries of debate: does the prefatory militia clause limit the operative individual-rights clause? The Supreme Court ruled in Heller (2008) that it protects an individual right to possess firearms for traditionally lawful purposes.',
    relevance: 'The founders\' debate about arms was inseparable from their debate about military power, tyranny, and self-defense. Understanding the historical context doesn\'t resolve the modern debate — but it makes the argument more honest than either side usually manages.',
    digDeeper: [
      { title: 'The Anti-Federalist fear of standing armies', description: 'Why the founders saw professional military forces as a threat to liberty' },
      { title: 'The English Bill of Rights (1689)', description: 'The Second Amendment\'s direct ancestor and what it actually protected' },
      { title: 'District of Columbia v. Heller (2008)', description: 'What the Supreme Court actually ruled — and what it left open' },
      { title: 'Patrick Henry on armed citizens', description: 'The most passionate founding-era voice for individual gun rights' },
      { title: 'State militias in the founding era', description: 'How they actually worked — who served, how they were organized' }
    ]
  },
  {
    day: 13,
    principle: 'Federalism',
    hook: 'Madison promised the states would remain the center of American life. He was specific about it. Then history happened.',
    quote: 'The powers delegated by the proposed Constitution to the federal government are few and defined. Those which are to remain in the State governments are numerous and indefinite. The former will be exercised principally on external objects... The powers reserved to the several States will extend to all the objects which, in the ordinary course of affairs, concern the lives, liberties, and properties of the people.',
    quoteAttr: 'James Madison, Federalist No. 45, 1788',
    context: 'Madison wrote Federalist 45 to answer the most common Anti-Federalist fear — that the federal government would slowly consume the states. His answer was clear. What he did not anticipate was how broadly the Commerce Clause and the Necessary and Proper Clause would eventually be interpreted to expand federal authority well beyond what he described.',
    relevance: 'The balance Madison described in 1788 looks very different from the federal-state relationship that exists today. Whether that shift represents necessary adaptation or constitutional drift is a question the founding record can inform but cannot answer alone. Each generation has to answer it for itself.',
    digDeeper: [
      { title: 'The Tenth Amendment', description: 'The constitutional text of federalism — and its practical limits' },
      { title: 'The Commerce Clause\'s expansion', description: 'How "regulate commerce among the states" became one of the broadest federal powers' },
      { title: 'The New Deal — federalism\'s turning point', description: 'The 1930s transformation that rewrote the Madison formula' },
      { title: 'Block grants vs. federal mandates', description: 'How the federal government shapes state policy through the spending power' },
      { title: 'Modern federalism conflicts', description: 'Immigration, marijuana, voting rights — where the states and feds still fight' }
    ]
  },
  {
    day: 14,
    principle: 'Constitutional interpretation',
    hook: 'Madison lived long enough to see people interpret the Constitution in ways he never intended. He was not amused.',
    quote: 'I entirely concur in the propriety of resorting to the sense in which the Constitution was accepted and ratified by the nation. In that sense alone it is the legitimate Constitution. And if that be not the guide in expounding it, there can be no security for a consistent and stable, more than for a faithful exercise of its powers.',
    quoteAttr: 'James Madison, Letter to Henry Lee, June 25, 1824',
    context: 'By the 1820s, Madison was watching politicians invoke the Constitution to justify policies he was certain the founders never intended. His response was consistent: the meaning of the Constitution was fixed at ratification, and the records of the debates were the authoritative guide. Madison wasn\'t against constitutional change — he had written the amendment process for exactly that purpose. His objection was to change achieved through reinterpretation rather than formal amendment.',
    relevance: 'The debate between originalism and living constitutionalism — interpreting the Constitution as founders understood it versus as a document that evolves with society — is the central debate in American constitutional law. Madison was the original originalist, and he was arguing against people within his own lifetime.',
    digDeeper: [
      { title: 'Madison\'s notes from the Constitutional Convention', description: 'Why he kept them secret for decades — and what they reveal' },
      { title: 'Originalism — what it means and its variants', description: 'Original intent vs. original public meaning — an important distinction' },
      { title: 'Living constitutionalism — the competing theory', description: 'The argument that constitutional meaning must evolve with society' },
      { title: 'The amendment process', description: 'The founders\' intended mechanism for constitutional change' },
      { title: 'McCulloch v. Maryland', description: 'The first great constitutional interpretation dispute — Madison vs. Marshall' }
    ]
  },
  {
    day: 15,
    principle: 'Faction and unity',
    hook: 'Washington\'s Farewell Address warned about something more dangerous than any foreign enemy. He called it the "worst enemy" of republican government — and it was already forming inside his own cabinet.',
    quote: 'However [political parties] may now and then answer popular ends, they are likely in the course of time and things, to become potent engines, by which cunning, ambitious, and unprincipled men will be enabled to subvert the power of the people.',
    quoteAttr: 'George Washington, Farewell Address, September 19, 1796',
    context: 'Washington\'s Farewell Address was never delivered as a speech — it was published in a Philadelphia newspaper. He had watched Hamilton and Jefferson tear his cabinet apart and seen the beginnings of organized parties. He came to believe that faction — loyalty to party over country — was the republic\'s most dangerous internal threat. He called the spirit of party "the worst enemy of popular government." He was describing what he had witnessed firsthand.',
    relevance: 'Washington\'s warning has been quoted by partisans of every stripe to attack the opposing party — which is precisely what he was warning against. His actual argument was structural: parties produce loyalty to faction over country, and that substitution is fatal to republican government.',
    digDeeper: [
      { title: 'The full Farewell Address — all three warnings', description: 'Political parties, foreign entanglements, and national debt in full context' },
      { title: 'Hamilton vs. Jefferson — the cabinet feud that produced parties', description: 'The personal and philosophical conflict that split Washington\'s administration' },
      { title: 'Federalist No. 10 — Madison on factions', description: 'Madison\'s earlier analysis of faction — before he started one himself' },
      { title: 'The Federalist Party — America\'s first organized political party', description: 'How the first party system formed and what it fought about' },
      { title: 'Why Washington really didn\'t seek a third term', description: 'The exhaustion and disillusionment behind his retirement' }
    ]
  },
  {
    day: 16,
    principle: 'National strength',
    hook: 'Hamilton had no patience for the idea that a republic must choose between its principles and its survival. He thought weakness was its own kind of corruption.',
    quote: 'A nation which can prefer disgrace to danger is prepared for a master, and deserves one.',
    quoteAttr: 'Alexander Hamilton, The Works of Alexander Hamilton, 1774',
    context: 'Hamilton was barely 20 years old and already thinking at the level of statecraft. Born in the Caribbean without the social advantages of the Virginia planters, he had to earn everything through intellect and argument. His conviction that a strong national character was inseparable from a strong national government drove everything he built: the financial system, the national bank, the case for ratification. A republic that could not project strength, he believed, would not survive.',
    relevance: 'Hamilton\'s vision — an energetic federal government, a commercial economy, a credible military — largely defined what America became. The debate he started with Jefferson and Madison about how much power a republic can safely concentrate has never been fully resolved.',
    digDeeper: [
      { title: 'Alexander Hamilton — the immigrant who built the financial republic', description: 'From the Caribbean to Washington\'s side to Treasury Secretary' },
      { title: 'The Federalist Papers — Hamilton\'s dominant role', description: 'He wrote 51 of the 85 essays. Their range and speed are still remarkable.' },
      { title: 'The national bank — the first great constitutional dispute', description: 'Hamilton vs. Jefferson on whether Congress could do what the Constitution didn\'t say' },
      { title: 'Hamilton vs. Jefferson — what they actually disagreed about', description: 'Not just personalities — two fundamentally different visions of America' },
      { title: 'The Whiskey Rebellion', description: 'Hamilton\'s first test of federal authority — and Washington\'s response' }
    ]
  },
  {
    day: 17,
    principle: 'The founders\' contradictions',
    hook: 'Jefferson wrote that all men are created equal. He also enslaved 600 people. He was not unaware of the contradiction — he said so himself.',
    quote: 'Nothing is more certainly written in the book of fate than that these people are to be free. Nor is it less certain that the two races, equally free, cannot live in the same government.',
    quoteAttr: 'Thomas Jefferson, Autobiography, 1821',
    context: 'Jefferson wrote this late in life, grappling with a contradiction he never resolved. He believed slavery was wrong — morally, politically, and practically. He also never freed his enslaved people during his lifetime, ran a plantation that depended on their labor, and wrote the 3/5 compromise into the political arithmetic of the republic. Jefferson is the founders\' central paradox: the man who most beautifully articulated the ideals of human equality lived most visibly at odds with them.',
    relevance: 'The founders\' contradictions are not a reason to dismiss their principles — they are a reason to take those principles more seriously than the founders themselves did. Every subsequent generation has done the work the founders left unfinished. That is the meaning of the arc of American history.',
    digDeeper: [
      { title: 'Jefferson and slavery — the full historical record', description: 'What he wrote, what he did, and the gap between them' },
      { title: 'The 3/5 compromise — what it was and why it happened', description: 'The political arithmetic that made union possible and slavery durable' },
      { title: 'The Declaration\'s deleted passage on slavery', description: 'What Jefferson originally wrote — and why the Continental Congress removed it' },
      { title: 'Founding-era abolitionists', description: 'The founders who did free their enslaved people — and argued others should too' },
      { title: 'How later generations used Jefferson\'s words against his practice', description: 'Lincoln, Douglass, and the moral argument built on the Declaration' }
    ]
  },
  {
    day: 18,
    principle: 'Constitutional design',
    hook: 'He was 5\'4" and never raised his voice in public. He is also the most consequential political architect in American history.',
    quote: 'The accumulation of all powers, legislative, executive, and judiciary, in the same hands, whether of one, a few, or many, and whether hereditary, self-appointed, or elective, may justly be pronounced the very definition of tyranny.',
    quoteAttr: 'James Madison, Federalist No. 47, 1788',
    context: 'Madison arrived at the Constitutional Convention in 1787 having read every book on republican government he could find. He catalogued their failures. His Virginia Plan became the Convention\'s working document from the first week. He then wrote 29 of the 85 Federalist Papers to secure ratification and authored the Bill of Rights in the First Congress. No single person shaped more of American constitutional architecture.',
    relevance: 'Madison\'s genius was that he stopped arguing that good men would govern well — and instead designed a system that didn\'t require them to. The checks and balances, the separation of powers, the Bill of Rights — all were structural solutions to the permanent problem of human ambition. The design is the legacy.',
    digDeeper: [
      { title: 'The Virginia Plan — Madison\'s blueprint', description: 'The proposal that became the Convention\'s working document from day one' },
      { title: 'The Constitutional Convention — fifty-five men, four months', description: 'What happened in Philadelphia, and what almost didn\'t' },
      { title: 'Madison\'s preparation — the reading list that shaped the Constitution', description: 'Every confederacy and republic he studied before arriving in Philadelphia' },
      { title: 'The Federalist Papers — who wrote what and why they matter', description: 'Hamilton, Madison, Jay — the division of labor and the lasting arguments' },
      { title: 'Madison vs. Hamilton — the falling out that changed American politics', description: 'Two co-authors of the Constitution who became fierce opponents' }
    ]
  },
  {
    day: 19,
    principle: 'Rule of law',
    hook: 'John Adams defended the British soldiers who fired at the Boston Massacre. He thought an unpopular principle was worth more than a popular lie — and the jury agreed.',
    quote: 'Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passion, they cannot alter the state of facts and evidence.',
    quoteAttr: 'John Adams, Defense of the Soldiers in the Boston Massacre Trial, December 4, 1770',
    context: 'Adams was already a patriot leader when he agreed to defend the British soldiers charged with murder after the Boston Massacre. His law partner refused to help, and he was attacked in the press. But Adams argued that the rule of law meant nothing if it only applied to popular defendants. He won acquittals for all but two soldiers, who were found guilty of manslaughter. He later called it "one of the best pieces of service I ever rendered my country."',
    relevance: 'Adams\' defense of British soldiers is the founding era\'s clearest statement of what the rule of law actually requires: not just protection for the powerful and popular, but equal application regardless of politics. That principle is tested in every generation.',
    digDeeper: [
      { title: 'The Boston Massacre — what actually happened on March 5, 1770', description: 'The events that led to the shooting, and why the story is more complicated than the name' },
      { title: 'Adams\' closing argument — why it worked', description: 'The legal strategy that persuaded a colonial jury to acquit British soldiers' },
      { title: 'John Adams — the most underrated founder', description: 'The man who secured the French alliance, negotiated peace, and lost his career for principle' },
      { title: 'A government of laws, not men', description: 'What the founders meant by this phrase and why it mattered' },
      { title: 'Crispus Attucks', description: 'The first person killed in the Boston Massacre and his place in history' }
    ]
  },
  {
    day: 20,
    principle: 'Unity',
    hook: 'Franklin was 70 when he signed the Declaration. He was the most famous American alive — and the one who understood best what failure would cost.',
    quote: 'We must, indeed, all hang together, or most assuredly we shall all hang separately.',
    quoteAttr: 'Benjamin Franklin, attributed at the signing of the Declaration of Independence, 1776',
    context: 'The signing of the Declaration was not a moment of triumph — it was an act of treason against the most powerful empire on earth. Every man who put his name on that parchment was committing a capital crime. Franklin had spent years in London trying to prevent the break, and had failed. Now the only path was forward, together. His remark — whether the exact words or something close — captured the stakes of the moment.',
    relevance: 'Franklin is the most underappreciated founder because he resists easy categorization. He wasn\'t a pure idealist or a pure pragmatist — he was both. His life is an argument that self-improvement and civic virtue are inseparable, and that what America needed was not angels but people willing to work.',
    digDeeper: [
      { title: 'Benjamin Franklin — the founding\'s polymath', description: 'Printer, scientist, diplomat, philosopher — and the oldest signer of the Declaration' },
      { title: 'The signing of the Declaration — what actually happened', description: 'The ceremony, the risks, and the men who knew exactly what they were doing' },
      { title: 'Franklin in Paris — how he won the French alliance', description: 'The diplomatic campaign that changed the outcome of the Revolution' },
      { title: 'Franklin at the Constitutional Convention — his closing speech', description: 'At 81, too ill to stand, he voted for the Constitution despite reservations' },
      { title: 'The Autobiography — America\'s first great self-improvement text', description: 'An argument in narrative form that civic virtue and self-improvement are inseparable' }
    ]
  },
  {
    day: 21,
    principle: 'Constitutional humility',
    hook: 'Jefferson didn\'t think the founders were sacred. He thought each generation had to claim the republic for itself — and that treating the Constitution as scripture was its own kind of tyranny.',
    quote: 'Some men look at constitutions with sanctimonious reverence, and deem them like the arc of the covenant, too sacred to be touched. They ascribe to the men of the preceding age a wisdom more than human, and suppose what they did to be beyond amendment.',
    quoteAttr: 'Thomas Jefferson, Letter to Samuel Kercheval, July 12, 1816',
    context: 'Jefferson wrote this letter at 73, pushing back against constitutional conservatism — the tendency to treat the founders\' decisions as final and sacred. Jefferson was a consistent reformer who believed institutions had to evolve with the people they served. He proposed that constitutions be revisited every 19 years — roughly one generation — so that the living would not be permanently governed by the dead.',
    relevance: 'Jefferson\'s warning cuts in two directions. Against those who refuse all change: don\'t worship documents. Against those who reject all tradition: the founders\' framework has proven more durable than any alternative. The balance between those positions is the difficulty — and the ongoing project.',
    digDeeper: [
      { title: 'Jefferson\'s "19-year" theory — government by the living', description: 'His proposal that each generation should inherit, not just inherit from, the founding' },
      { title: 'The amendment process — how constitutional change was designed', description: 'Article V and the founders\' intended mechanism for legitimate change' },
      { title: 'The founders\' own disagreements', description: 'They were not a monolith — and they knew the document was imperfect' },
      { title: 'Which amendments Jefferson would have supported', description: 'A speculative but grounded look at the reformer in Jefferson' },
      { title: 'How the founders themselves disagreed about constitutional meaning', description: 'The debates started before the ink was dry — and never stopped' }
    ]
  },
  {
    day: 22,
    principle: 'Religious liberty',
    hook: 'Jefferson\'s "wall of separation" is the most misquoted phrase in American constitutional history. Here is what he actually wrote — and why Baptists asked him to write it.',
    quote: 'I contemplate with sovereign reverence that act of the whole American people which declared that their legislature should make no law respecting an establishment of religion, or prohibiting the free exercise thereof, thus building a wall of separation between Church & State.',
    quoteAttr: 'Thomas Jefferson, Letter to the Danbury Baptist Association, January 1, 1802',
    context: 'The Danbury Baptists were a religious minority in Connecticut — a state with an established Congregationalist church that collected taxes from everyone, including dissenters. They wrote to President Jefferson in 1801 hoping for protection. His response clarified the First Amendment\'s religion clauses: the government could not establish a church, and it could not interfere with free exercise. The wall ran both directions.',
    relevance: 'The wall of separation is frequently cited as evidence that the founders intended a purely secular public square. Jefferson\'s actual letter was a guarantee of religious freedom — not a demand for the absence of religion from public life. The distinction matters enormously in current debates about prayer, public funding, and religious institutions.',
    digDeeper: [
      { title: 'Established churches in colonial America', description: 'The state churches the founders were reacting against — and how they operated' },
      { title: 'Virginia Statute for Religious Freedom', description: 'Jefferson\'s earlier model that became the template for the First Amendment' },
      { title: 'The Danbury Baptists — what happened to Connecticut\'s establishment', description: 'The rest of the story after Jefferson\'s letter' },
      { title: 'Free exercise vs. establishment — when the clauses conflict', description: 'The two religion clauses and the cases that define their limits' },
      { title: 'The Supreme Court and religion', description: 'How the Court has interpreted the religion clauses across two centuries' }
    ]
  },
  {
    day: 23,
    principle: 'Property and liberty',
    hook: 'Madison\'s definition of property included something the government has always wanted to control: your mind.',
    quote: 'Conscience is the most sacred of all property; other property depending in part on positive law, the exercise of that being a natural and unalienable right. To guard a man\'s house as his castle... can give no title to invade a man\'s conscience, which is more sacred than his castle.',
    quoteAttr: 'James Madison, "Property," National Gazette, March 29, 1792',
    context: 'Madison published this essay as part of a sustained argument against Hamilton\'s vision of an activist federal government. His point was that property and rights were inseparable — the government that could seize your land could seize your opinions. He defined property in the broadest possible sense: your body, your labor, your conscience, your opinions. Any government with the power to violate one had the power to violate all.',
    relevance: 'Madison\'s expansive definition of property connects economic and civil liberties in ways modern political thought tends to separate. His argument is that they cannot be separated — the security of one depends on the security of the other. That connection is the most important thing the modern left and right have both forgotten.',
    digDeeper: [
      { title: 'Locke\'s labor theory of property', description: 'The philosophical foundation Madison was building on' },
      { title: 'The Takings Clause — Fifth Amendment text and history', description: '"Nor shall private property be taken for public use, without just compensation"' },
      { title: 'Hamilton\'s economic vision vs. Madison\'s agrarian republic', description: 'The dispute behind this essay — and why Hamilton\'s vision largely won' },
      { title: 'Intellectual property in the founding era', description: 'The founders\' debate about copyright and patents — surprisingly modern' },
      { title: 'Regulatory takings today', description: 'The modern application of Madison\'s principle to government regulation' }
    ]
  },
  {
    day: 24,
    principle: 'Freedom of the press',
    hook: 'Jefferson said he\'d rather have newspapers without government than government without newspapers. He also spent his presidency being savaged by the press. He didn\'t change his position.',
    quote: 'The basis of our governments being the opinion of the people, the very first object should be to keep that right; and were it left to me to decide whether we should have a government without newspapers or newspapers without a government, I should not hesitate a moment to prefer the latter.',
    quoteAttr: 'Thomas Jefferson, Letter to Edward Carrington, January 16, 1787',
    context: 'Jefferson wrote this from Paris in 1787, four years before the First Amendment was ratified. He had watched the French monarchy suppress information and seen how ignorance served power. His conviction was absolute: a free press was the only mechanism by which citizens could know what their government was doing. He never wavered from this position — even when the press was viciously unfair to him personally.',
    relevance: 'Jefferson\'s principle is tested by every generation that decides which speech is too dangerous to protect. His answer — protect it all, especially the inconvenient — remains the most consistent defense of press freedom in American history. And the most demanding.',
    digDeeper: [
      { title: 'The press in the founding era', description: 'How partisan, unregulated, and often vicious founding-era newspapers actually were' },
      { title: 'The Alien and Sedition Acts', description: 'When Adams used the government to silence critics — and Jefferson\'s response' },
      { title: 'The Zenger trial (1735)', description: 'The colonial free-press case that shaped the founders\' thinking before the Constitution' },
      { title: 'Jefferson\'s personal press battles', description: 'The specific attacks he absorbed without using government to silence them' },
      { title: 'Prior restraint — the founders\' deepest press concern', description: 'Why preventing speech before it happens was considered worse than punishing it after' }
    ]
  },
  {
    day: 25,
    principle: 'Civic virtue',
    hook: 'Adams wrote his most important civic essay in 1765 — eleven years before the Declaration. His argument: tyranny doesn\'t conquer free people. It educates them into submission.',
    quote: 'Be it remembered, however, that liberty must at all hazards be supported. We have a right to it, derived from our Maker. But if we had not, our fathers have earned and bought it for us, at the expense of their ease, their estates, their pleasure, and their blood.',
    quoteAttr: 'John Adams, A Dissertation on the Canon and Feudal Law, 1765',
    context: 'Adams wrote this in response to the Stamp Act, tracing the history of how both the Church (canon law) and the English nobility (feudal law) had used ignorance to maintain power over ordinary people. His argument was that the Puritan tradition of universal education — so every person could read scripture and law — was the foundation of New England\'s resistance to tyranny. Educated citizens were ungovernable in the best sense.',
    relevance: 'Civic virtue is not a feeling — it\'s a practice. It requires knowledge of history, understanding of principles, and willingness to act on them. A republic that outsources that knowledge to experts, or stops teaching it entirely, is already losing the thing it thinks it\'s preserving.',
    digDeeper: [
      { title: 'The Stamp Act — what it was and why it provoked such fury', description: 'The tax that turned lawyers and printers into revolutionaries' },
      { title: 'New England\'s civic education tradition', description: 'Schools as republican institutions — educating citizens, not just workers' },
      { title: 'Adams\' Defence of the Constitutions', description: 'His most systematic work of political theory — and the most neglected' },
      { title: 'Tocqueville on American civic associations', description: 'What the French observer saw in 1831 that Americans had already stopped noticing' },
      { title: 'Civic education today', description: 'What the founders would make of current civics curricula — and current citizenship' }
    ]
  },
  {
    day: 26,
    principle: 'Washington\'s warnings',
    hook: 'Washington used his farewell to warn America about three things. Two of them got worse.',
    quote: 'The alternate domination of one faction over another, sharpened by the spirit of revenge, natural to party dissension, which in different ages and countries has perpetrated the most horrid enormities, is itself a frightful despotism. But this leads at length to a more formal and permanent despotism.',
    quoteAttr: 'George Washington, Farewell Address, September 19, 1796',
    context: 'Washington\'s Farewell Address was never delivered as a speech — it was published in a Philadelphia newspaper. He had spent years watching the Federalist-Republican split tear his administration apart, seen American citizens take opposing sides in the French Revolution, and concluded that partisan loyalty was incompatible with republican self-governance. His warning was not abstract. He was describing what he had witnessed firsthand.',
    relevance: 'Washington warned that parties would produce men loyal to faction over country. Whether that warning describes today\'s politics is a question each citizen must answer for themselves. His framework remains the clearest language available for the argument.',
    digDeeper: [
      { title: 'The full Farewell Address — all three warnings in context', description: 'Parties, foreign entanglements, national debt — the complete testament' },
      { title: 'Washington\'s foreign policy vision', description: 'The "entangling alliances" debate and what he actually said about it' },
      { title: 'The national debt warning', description: 'What Washington feared, what actually happened, and what he\'d make of today' },
      { title: 'The Jefferson-Hamilton feud', description: 'The cabinet crisis that convinced Washington parties were the republic\'s gravest threat' },
      { title: 'How Washington is remembered vs. what he actually said', description: 'The gap between the monument and the man' }
    ]
  },
  {
    day: 27,
    principle: 'Anti-Federalist warnings',
    hook: 'The opponents of the Constitution predicted that the Supreme Court would gradually expand federal power until the states were irrelevant. They were writing in 1788.',
    quote: 'The supreme court under this constitution would be exalted above all other power in the government, and subject to no controul... there is no power above them that can correct their errors or controul their decisions.',
    quoteAttr: 'Brutus (Robert Yates), Brutus No. 15, March 20, 1788',
    context: 'Brutus was the pseudonym of Robert Yates, a New York judge who had attended the Constitutional Convention and left early, convinced it was producing a national government that would destroy the states. In Brutus No. 15, he predicted with remarkable accuracy what the federal judiciary would become: an unaccountable final arbiter that would interpret the Constitution to expand federal power without limit. His prediction proved more accurate than the Federalists\' reassurances.',
    relevance: 'The Anti-Federalists lost the ratification debate. But they won the argument about the Bill of Rights — Madison\'s amendments were a direct response to their demands. And Brutus\'s prediction about judicial power has been validated repeatedly. The losers of 1788 deserve a hearing.',
    digDeeper: [
      { title: 'Who was Brutus? — Robert Yates and the New York fight', description: 'The judge who attended the Convention, left early, and predicted everything' },
      { title: 'The full Anti-Federalist canon', description: 'Centinel, Federal Farmer, Brutus — the arguments the Federalists had to answer' },
      { title: 'The Bill of Rights as Anti-Federalist victory', description: 'How the losers of ratification won the most important concession' },
      { title: 'Marbury v. Madison — the power Brutus feared', description: 'How judicial review was established — and what it meant for Brutus\'s prediction' },
      { title: 'Brutus vs. Federalist No. 78', description: 'Hamilton\'s counter-argument to Brutus — and who was right' }
    ]
  },
  {
    day: 28,
    principle: 'Constitutional adaptation',
    hook: 'Jefferson was asked what the founders would think about later constitutional debates. His answer was direct — and harder than most people want it to be.',
    quote: 'On every question of construction, carry ourselves back to the time when the Constitution was adopted, recollect the spirit manifested in the debates, and instead of trying what meaning may be squeezed out of the text, or invented against it, conform to the probable one in which it was passed.',
    quoteAttr: 'Thomas Jefferson, Letter to William Johnson, June 12, 1823',
    context: 'Jefferson wrote this as a clear statement of interpretive method: understand the Constitution as those who ratified it understood it. He was arguing against the elastic interpretation being developed by Chief Justice John Marshall, who was finding in the Constitution powers that Jefferson believed had never been there. Jefferson was arguing for original intent before the term existed.',
    relevance: 'The question of what the founders "would think" is asked in every constitutional debate — and usually answered to confirm what the person asking already believes. Jefferson\'s actual instruction was more demanding: go back to the records, read the debates, understand the context. Don\'t squeeze meaning from the text — find it there.',
    digDeeper: [
      { title: 'John Marshall — the Chief Justice who defined federal judicial power', description: 'His tenure transformed what the Supreme Court was and did' },
      { title: 'McCulloch v. Maryland', description: 'The case Jefferson was arguing against — and why it still matters' },
      { title: 'Original intent vs. original public meaning', description: 'A distinction within originalism that matters more than it sounds' },
      { title: 'The Virginia and Kentucky Resolutions', description: 'Jefferson\'s and Madison\'s constitutional protest against federal overreach' },
      { title: 'How to actually read the founders', description: 'Primary sources vs. secondary interpretation — the difference is everything' }
    ]
  },
  {
    day: 29,
    principle: 'Ordinary people',
    hook: 'The founders were not the revolution. The revolution was the farmers, tradesmen, and minutemen who stood on the green at Lexington before most of the founders had written a word.',
    quote: 'Stand your ground. Don\'t fire unless fired upon, but if they mean to have a war, let it begin here.',
    quoteAttr: 'Captain John Parker, Lexington Green, April 19, 1775',
    context: 'Captain John Parker was a farmer and veteran of the French and Indian War. He commanded the Lexington militia — 77 men, some of them his relatives — who stood on the green on the morning of April 19, 1775 as 700 British regulars marched toward them. Parker was already dying of tuberculosis. He knew what he was asking. The shot fired that morning began a war. Parker\'s company was among the first to die in it.',
    relevance: 'The Minutemen are the founding\'s most underappreciated characters. The Declaration was written by men of learning and privilege. The revolution was fought by men like John Parker — ordinary people who believed the principles were real enough to die for. That gap between the ideals and the people who secured them with their bodies is the republic\'s truest origin story.',
    digDeeper: [
      { title: 'The Battles of Lexington and Concord', description: 'What actually happened on April 19, 1775 — hour by hour' },
      { title: 'The Minuteman tradition — citizen soldiers', description: 'Who they were, how they organized, and what they were actually trained for' },
      { title: 'Paul Revere\'s ride — what actually happened', description: 'The real story is more interesting than Longfellow\'s poem' },
      { title: 'Ordinary founders — the non-famous people who made the Revolution', description: 'The farmers, printers, and tradesmen who bore the actual weight' },
      { title: 'The shot heard round the world', description: 'Emerson\'s phrase, its origins, and why nobody knows who fired it' }
    ]
  },
  {
    day: 30,
    principle: 'We the People',
    hook: 'The Constitution doesn\'t begin with the government. It begins with the people. Three words that changed the architecture of political power.',
    quote: 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.',
    quoteAttr: 'Preamble to the Constitution of the United States, 1787',
    context: 'The Preamble\'s opening — "We the People" — was a radical act. Every government before it had derived authority from God, a king, or tradition. The American Constitution derived its authority from the citizens themselves. Gouverneur Morris wrote the final language at the Convention\'s end. The original draft listed each state individually, but when it became uncertain which states would ratify, Morris changed it to "We the People" as a collective. The change was practical. Its implications were revolutionary.',
    relevance: 'The Preamble is not legally enforceable — it confers no rights and creates no powers. But it is the republic\'s statement of purpose. Every debate about what government should do — justice, tranquility, defense, welfare, liberty — is ultimately an argument about how to fulfill this sentence. The conversation it started is the one you are now part of.',
    digDeeper: [
      { title: 'Gouverneur Morris — the man who wrote the Constitution\'s language', description: 'The often-overlooked delegate who gave the document its final form' },
      { title: '"We the People" — how the phrase changed from draft to final', description: 'A practical change with revolutionary implications' },
      { title: 'The six purposes of the Preamble', description: 'What "more perfect Union," "establish Justice," and each phrase actually meant' },
      { title: 'The Preamble in court — why it can\'t be used to argue cases', description: 'What it is and what it isn\'t in constitutional law' },
      { title: 'The Constitution\'s ratification', description: 'The nine states needed, the fights to get them, and how close it came to failing' }
    ]
  }
];

function getDayEntry(offset) {
  const today = new Date();
  const target = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (offset || 0));
  const m = target.getMonth() + 1;
  const d = target.getDate();

  if (offset === 0 || offset === undefined) {
    if (m === 7  && d === 4)  return DAILY_CONTENT[0];
    if (m === 9  && d === 17) return DAILY_CONTENT[7];
    if (m === 4  && d === 19) return DAILY_CONTENT[28];
  }

  const start = new Date(2025, 4, 11);
  const daysSince = Math.floor((target - start) / 86400000);
  const idx = ((daysSince % 30) + 30) % 30;
  return DAILY_CONTENT[idx];
}
