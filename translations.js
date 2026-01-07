document.getElementById("translateButton").addEventListener("click", function() {
    // var translateButton = document.getElementById('translateButton');
    // translateButton.style.display = 'none';
    // 定义英文和繁体中文的翻译
    var translations = {
        "YOYO HO": "何宗祐",
        "WORK EXPERIENCE": "工作經歷",
        "SOFTWARE ENGINEER": "軟體工程師",
        "Python Automation Engineer": "Python 自動化工程師",
        "Software Development Engineer in Test": "自動化測試開發工程師 SDET",
        "Software Engineer - Backend": "JAVA軟體後端開發工程師",
        "Software QA Engineer": "軟體測試工程師",
        "BMC QA Engineer": "BMC測試工程師",
        "Software QA Automation Engineer Intern": "實習自動化軟體測試工程師",
        "轉成中文版": "Translate to English Version",
        "Jan 2023 - April 2024": "2023年1月 - 2024年4月",
        "Development of automation tests and CI process for android system apps and sensors firmware": "為安卓系統APP和感測器韌體開發自動化測試和CI流程",
        "Performed migration and upgrades of the Jenkins server to maintain CI automation lab infrastructure": "遷移和更新自動化測試使用的Jenkins 伺服器",
        "Integrated image-to-text conversion and custom backend APIs into automated tests": "整合圖像轉文字和自製後端API到自動化測試中",
        "Designed a flexible process to adjust test rounds and automatically generate scripts for stability testing": "使穩定性測試不管在本地或jenkins執行都能方便動態修改執行次數及生成腳本",
        "Apr 2022 - Jan 2023": "2022年4月 - 2023年1月",
        "Worked on the Astoria project, testing Google servers for data center": "Google Astoria專案,測試給資料中心用的伺服器",
        "Developed server automation tests using the open-source openbmc-test-automation according to client's requirements": "根據客戶需求使用開源的openbmc-test-automation開發伺服器自動化測試",
        "Automated manual testing procedures, including firmware and sensor functionality, as well as power cycle and soft reboot": "自動化手動測試，包括韌體和感測器功能驗證，以及power cycle和soft reboot",
        "Skyfill Information": "昊盈資訊",
        "Apr 2021 - Mar 2022": "2021年4月 - 2022年3月",
        "Developed four projects: lottery, betting, customer referrals, and customer check-in": "參與開發四個專案：競猜、抽獎、客戶推薦和客戶打卡",
        "Development of REST API and Client Management Web UI": "後端Restful API、前端企業後台介面開發、維護",
        "Built custom test scripts and fake customer data to check API functions and business logic": "撰寫Web/API自動化腳本,模擬大量用戶情境,以驗證每次開發的專案邏輯、資料是否正確",
        "Sep 2020 - Mar 2021": "2020年9月 - 2021年3月",
        "Web and Android App manual test": "Web和Android APP手動測試",
        "Developed Python scripts to improve testing efficiency for web and Android app validation": "開發Python腳本輔助Web和Android APP測試",
        "Oct 2019 - Jul 2020": "2019年10月 - 2020年7月",
        "Participated in the Smart Workshop project": "智慧車廠專案",
        "Development of automation tests for REST APIs and web UI": "為專案使用的Restful API和Web UI開發自動化測試",
        "Appeared in the news with team for project accomplishments": "新聞:台灣新創團隊Cruisys 「演算」出智能車廠",
        "EDUCATION AND ACHIEVEMENTS": "學歷與成就",
        "Bachelor of Science": "理學士",
        "Ming Chuan University": "銘傳大學",
        "Computer and Communication Engineering": "資訊傳播工程",
        "YouTube 100K Subscribers": "YouTube 10萬訂閱",
        "Silver Creator Award": "白銀創作者獎",
        "Total Views: 28M+": "總觀看次數： 2800萬+",
        "Top View Count: 1.9M": "最高觀看次數： 190萬",
        "SKILLS": "技能",
        "Familiar With": "熟悉",
        "Used": "使用過",
        "Bitcoin Automated Trading": "比特幣自動交易",
        "Runs on Raspberry Pi": "運行於樹莓派",
        "Remote Control and Deployment via LineBot": "通過LineBot進行遠程控制和部署",
        "Automated Trading Record on Google Sheets": "會在Google Sheets上自動更新交易記錄",
        "May 2024 - Present": "2024年5月 - 現在",
        "Collaborate with Microsoft Taiwan team to develop infrastructure domain automation test cases": "目前與微軟台灣團隊合作，開發 Infra 領域自動化測試",
        "Collaborated with Microsoft US team for 1.5 years, developing and maintaining automation tests for NVIDIA GB200 and H200 platforms": "與美國微軟團隊合作 1.5 年，負責 NVIDIA GB200 與 H200 平台的自動化測試開發與維護",
        "Contributed to building the Pythia automation framework, adding ADO library for Azure DevOps test case management, shared parameters support, and serial interface functionality in the hardware library": "參與建置 Pythia 自動化框架，新增 ADO 函式庫以支援 Azure DevOps 的測試案例及共享參數管理，以及硬體函式庫中的序列介面功能",
        "Developed core automation functions to support virtual machine test cases": "建置並開發虛擬機自動化測試的核心功能",
        "Maintained and developed numerous test cases for BMC functionalities and power management": "維護並開發多個 BMC 系統功能與電源管理相關的測試",
        "Developed N / N-1 ping-pong firmware upgrade/downgrade tests for both full-GPU bundle updates and individual component updates across BMC, BIOS, M.2, MUEFI, etc": "開發 N / N-1 韌體升降級循環測試，涵蓋完整 GPU 套件更新及單一元件更新（BMC、BIOS、M.2 及 MUEFI 等）",
        "Implemented GPU stress and stability tests on Windows and Linux, including AC/DC power cycles and OS reboots": "在 Windows 與 Linux 上開發 GPU 壓力與穩定性測試，包括 AC/DC cycles與作業系統重啟",
        "Automated system log collection and verification, enhancing efficiency in root-cause analysis": "自動化系統日誌收集與驗證，提高問題排查效率"
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
