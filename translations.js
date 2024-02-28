document.getElementById("translateButton").addEventListener("click", function() {
    // var translateButton = document.getElementById('translateButton');
    // translateButton.style.display = 'none';
    // 定义英文和繁体中文的翻译
    var translations = {
        "YOYO HO": "何宗祐",
        "WORK EXPERIENCE": "工作經歷",
        "SOFTWARE ENGINEER": "軟體工程師",
        "Software Development Engineer in Test": "自動化測試開發工程師 SDET",
        "Software Engineer - Backend": "JAVA軟體後端開發工程師",
        "Software QA Engineer": "軟體測試工程師",
        "BMC QA Engineer": "BMC測試工程師",
        "Software QA Automation Engineer Intern": "實習自動化軟體測試工程師",
        "轉成中文版": "Translate to English Version",
        "Jan 2023 - Present": "2023年1月 - 現在",
        "Working on projects for the American client, Peloton": "客戶-美商派樂騰(Peloton)",
        "Development of automation tests and CI process for android system apps and sensors firmware": "為安卓系統APP和感測器韌體開發自動化測試和CI流程",
        "Migration and update of the Jenkins server in the automation CI lab": "遷移和更新自動化測試使用的Jenkins Server",
        "Incorporate image-to-text conversion and custom backend API into automated tests": "整合圖像轉文字和自製後端API到自動化測試中",
        "Design a process that can easily change test rounds for stability test scripts": "使穩定性測試腳本不管在本地或jenkins執行都能方便動態修改執行次數",
        "Apr 2022 - Jan 2023": "2022年4月 - 2023年1月",
        "Served on the Astoria project, testing Google servers for data centers.": "Google Astoria專案,測試給資料中心用的Server",
        "Develop server automation tests using the open-source openbmc-test-automation based on client's requirements": "根據客戶需求使用開源的openbmc-test-automation開發Server自動化測試",
        "Automate manual testing procedures, including firmware and sensor functionality, as well as power cycle and soft reboot": "自動化手動測試，包括韌體和感測器功能驗證，以及power cycle和soft reboot",
        "Skyfill Information": "昊盈資訊",
        "Apr 2021 - Mar 2022": "2021年4月 - 2022年3月",
        "Developed four projects: lottery, betting, customer referrals, and customer check-in": "參與開發四個專案：競猜、抽獎、客戶推薦和客戶打卡",
        "Development of REST API and Client Management Web UI": "後端Restful API、前端企業後台介面開發、維護",
        "Create a large set of simulated customer data to be used with custom scripts for API functionality and logic validation after each new feature development": "撰寫Web/API自動化腳本,模擬大量用戶情境,以驗證每次開發的專案邏輯、資料是否正確",
        "Sep 2020 - Mar 2021": "2020年9月 - 2021年3月",
        "Web and Android App manual test": "Web和Android APP手動測試",
        "Write some Python scripts to help make web and app testing more efficient": "開發Python腳本輔助Web和APP測試",
        "Oct 2019 - Jul 2020": "2019年10月 - 2020年7月",
        "Participated in the Smart Workshop project": "智慧車廠專案",
        "Development of automation tests for REST APIs and web UI": "為專案使用的Restful API和Web UI開發自動化測試",
        "Have appeared in the news alongside team members": "新聞:台灣新創團隊Cruisys 「演算」出智能車廠",
        "EDUCATION AND ACHIEVEMENTS": "學歷與成就",
        "Bachelor of Science": "理學士",
        "Ming Chuan University": "銘傳大學",
        "Computer and Communication Engineering": "資訊傳播工程",
        "YouTube 100K Subscribers": "YouTube 10萬訂閱",
        "Silver Creator Award": "白銀創作者獎",
        "SKILLS": "技能",
        "Familiar With": "熟悉",
        "Used": "使用過",
        "Bitcoin Automated Trading": "比特幣自動交易",
        "Runs on Raspberry Pi": "運行於樹莓派",
        "Remote Control and Deployment via LineBot": "通過LineBot進行遠程控制和部署",
        "Automated Trading Record on Google Sheets": "會在Google Sheets上自動更新交易記錄",
    };

    // // 检查当前网页的语言
    // var currentLanguage = document.documentElement.lang;

    // // 切换语言
    // if (currentLanguage === "en") {
    //     // 切换到繁体中文
    //     document.documentElement.lang = "zh-Hant";
    // } else {
    //     // 切换到英文
    //     document.documentElement.lang = "en";
    // }

    // 翻译所有文本内容
    Object.keys(translations).forEach(function(key) {
        var elements = document.querySelectorAll(':not(.resume-company-logo):not(.d-flex)');
        elements.forEach(function(element) {
            var text = element.innerText || element.textContent;
            if (text && text.trim() === key) {
                element.textContent = translations[key];
            }
            else if (text && text.trim() === translations[key]) {
                element.textContent = key;
            }
        });
    });
});
