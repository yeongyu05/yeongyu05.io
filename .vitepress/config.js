// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
  title: "연규의 blog",
  description: "A VitePress site",
  srcDir: mdDir,
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav(),
  },
  vite: {
    ssr: {
      format: "cjs",
    },
  },
};

function getSidebar() {
  return {
    "/": [
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2023년01월", link: "/TIL/202301/202301" },
          { text: "2023년01월02일", link: "/TIL/202301/20230102" },
          { text: "2023년01월04일", link: "/TIL/202301/20230104" },
          { text: "2023년01월05일", link: "/TIL/202301/20230105" },
          { text: "2023년01월06일", link: "/TIL/202301/20230106" },
          { text: "2023년01월09일", link: "/TIL/202301/20230109" },
          { text: "2023년01월11일", link: "/TIL/202301/20230111" },
          { text: "2023년01월12일", link: "/TIL/202301/20230112" },
          { text: "2023년01월13일", link: "/TIL/202301/20230113" },
          { text: "2023년01월16일", link: "/TIL/202301/20230116" },
          { text: "2023년01월17일", link: "/TIL/202301/20230117" },
          { text: "2023년01월18일", link: "/TIL/202301/20230118" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2022년12월", link: "/TIL/202212/202212" },
          { text: "2022년12월01일", link: "/TIL/202212/20221201" },
          { text: "2022년12월02일", link: "/TIL/202212/20221202" },
          { text: "2022년12월03일", link: "/TIL/202212/20221203" },
          { text: "2022년12월04일", link: "/TIL/202212/20221204" },
          { text: "2022년12월05일", link: "/TIL/202212/20221205" },
          { text: "2022년12월06일", link: "/TIL/202212/20221206" },
          { text: "2022년12월07일", link: "/TIL/202212/20221207" },
          { text: "2022년12월08일", link: "/TIL/202212/20221208" },
          { text: "2022년12월09일", link: "/TIL/202212/20221209" },
          { text: "2022년12월10일", link: "/TIL/202212/20221210" },
          { text: "2022년12월11일", link: "/TIL/202212/20221211" },
          { text: "2022년12월12일", link: "/TIL/202212/20221212" },
          { text: "2022년12월13일", link: "/TIL/202212/20221213" },
          { text: "2022년12월14일", link: "/TIL/202212/20221214" },
          { text: "2022년12월15일", link: "/TIL/202212/20221215" },
          { text: "2022년12월16일", link: "/TIL/202212/20221216" },
          { text: "2022년12월17일", link: "/TIL/202212/20221217" },
          { text: "2022년12월18일", link: "/TIL/202212/20221218" },
          { text: "2022년12월19일", link: "/TIL/202212/20221219" },
          { text: "2022년12월20일", link: "/TIL/202212/20221220" },
          { text: "2022년12월21일", link: "/TIL/202212/20221221" },
          { text: "2022년12월22일", link: "/TIL/202212/20221222" },
          { text: "2022년12월27일", link: "/TIL/202212/20221227" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2022년11월", link: "/TIL/202211/202211" },
          { text: "2022년11월01일", link: "/TIL/202211/20221101" },
          { text: "2022년11월02일", link: "/TIL/202211/20221102" },
          { text: "2022년11월03일", link: "/TIL/202211/20221103" },
          { text: "2022년11월04일", link: "/TIL/202211/20221104" },
          { text: "2022년11월05일", link: "/TIL/202211/20221105" },
          { text: "2022년11월06일", link: "/TIL/202211/20221106" },
          { text: "2022년11월07일", link: "/TIL/202211/20221107" },
          { text: "2022년11월08일", link: "/TIL/202211/20221108" },
          { text: "2022년11월09일", link: "/TIL/202211/20221109" },
          { text: "2022년11월10일", link: "/TIL/202211/20221110" },
          { text: "2022년11월11일", link: "/TIL/202211/20221111" },
          { text: "2022년11월12일", link: "/TIL/202211/20221112" },
          { text: "2022년11월13일", link: "/TIL/202211/20221113" },
          { text: "2022년11월14일", link: "/TIL/202211/20221114" },
          { text: "2022년11월15일", link: "/TIL/202211/20221115" },
          { text: "2022년11월16일", link: "/TIL/202211/20221116" },
          { text: "2022년11월17일", link: "/TIL/202211/20221117" },
          { text: "2022년11월18일", link: "/TIL/202211/20221118" },
          { text: "2022년11월19일", link: "/TIL/202211/20221119" },
          { text: "2022년11월20일", link: "/TIL/202211/20221120" },
          { text: "2022년11월21일", link: "/TIL/202211/20221121" },
          { text: "2022년11월22일", link: "/TIL/202211/20221122" },
          { text: "2022년11월23일", link: "/TIL/202211/20221123" },
          { text: "2022년11월24일", link: "/TIL/202211/20221124" },
          { text: "2022년11월25일", link: "/TIL/202211/20221125" },
          { text: "2022년11월26일", link: "/TIL/202211/20221126" },
          { text: "2022년11월27일", link: "/TIL/202211/20221127" },
          { text: "2022년11월28일", link: "/TIL/202211/20221128" },
          { text: "2022년11월29일", link: "/TIL/202211/20221129" },
          { text: "2022년11월30일", link: "/TIL/202211/20221130" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2022년10월", link: "/TIL/202210/202210" },
          { text: "2022년10월01일", link: "/TIL/202210/20221001" },
          { text: "2022년10월02일", link: "/TIL/202210/20221002" },
          { text: "2022년10월03일", link: "/TIL/202210/20221003" },
          { text: "2022년10월04일", link: "/TIL/202210/20221004" },
          { text: "2022년10월05일", link: "/TIL/202210/20221005" },
          { text: "2022년10월06일", link: "/TIL/202210/20221006" },
          { text: "2022년10월07일", link: "/TIL/202210/20221007" },
          { text: "2022년10월08일", link: "/TIL/202210/20221008" },
          { text: "2022년10월09일", link: "/TIL/202210/20221009" },
          { text: "2022년10월10일", link: "/TIL/202210/20221010" },
          { text: "2022년10월11일", link: "/TIL/202210/20221011" },
          { text: "2022년10월12일", link: "/TIL/202210/20221012" },
          { text: "2022년10월13일", link: "/TIL/202210/20221013" },
          { text: "2022년10월14일", link: "/TIL/202210/20221014" },
          { text: "2022년10월15일", link: "/TIL/202210/20221015" },
          { text: "2022년10월16일", link: "/TIL/202210/20221016" },
          { text: "2022년10월17일", link: "/TIL/202210/20221017" },
          { text: "2022년10월18일", link: "/TIL/202210/20221018" },
          { text: "2022년10월19일", link: "/TIL/202210/20221019" },
          { text: "2022년10월20일", link: "/TIL/202210/20221020" },
          { text: "2022년10월21일", link: "/TIL/202210/20221021" },
          { text: "2022년10월22일", link: "/TIL/202210/20221022" },
          { text: "2022년10월23일", link: "/TIL/202210/20221023" },
          { text: "2022년10월24일", link: "/TIL/202210/20221024" },
          { text: "2022년10월25일", link: "/TIL/202210/20221025" },
          { text: "2022년10월26일", link: "/TIL/202210/20221026" },
          { text: "2022년10월27일", link: "/TIL/202210/20221027" },
          { text: "2022년10월28일", link: "/TIL/202210/20221028" },
          { text: "2022년10월29일", link: "/TIL/202210/20221029" },
          { text: "2022년10월30일", link: "/TIL/202210/20221030" },
          { text: "2022년10월31일", link: "/TIL/202210/20221031" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2022년09월", link: "/TIL/202209/202209" },
          { text: "2022년09월01일", link: "/TIL/202209/20220901" },
          { text: "2022년09월02일", link: "/TIL/202209/20220902" },
          { text: "2022년09월03일", link: "/TIL/202209/20220903" },
          { text: "2022년09월04일", link: "/TIL/202209/20220904" },
          { text: "2022년09월05일", link: "/TIL/202209/20220905" },
          { text: "2022년09월06일", link: "/TIL/202209/20220906" },
          { text: "2022년09월07일", link: "/TIL/202209/20220907" },
          { text: "2022년09월08일", link: "/TIL/202209/20220908" },
          { text: "2022년09월09일", link: "/TIL/202209/20220909" },
          { text: "2022년09월10일", link: "/TIL/202209/20220910" },
          { text: "2022년09월11일", link: "/TIL/202209/20220911" },
          { text: "2022년09월12일", link: "/TIL/202209/20220912" },
          { text: "2022년09월13일", link: "/TIL/202209/20220913" },
          { text: "2022년09월14일", link: "/TIL/202209/20220914" },
          { text: "2022년09월15일", link: "/TIL/202209/20220915" },
          { text: "2022년09월16일", link: "/TIL/202209/20220916" },
          { text: "2022년09월17일", link: "/TIL/202209/20220917" },
          { text: "2022년09월18일", link: "/TIL/202209/20220918" },
          { text: "2022년09월19일", link: "/TIL/202209/20220919" },
          { text: "2022년09월20일", link: "/TIL/202209/20220920" },
          { text: "2022년09월21일", link: "/TIL/202209/20220921" },
          { text: "2022년09월22일", link: "/TIL/202209/20220922" },
          { text: "2022년09월23일", link: "/TIL/202209/20220923" },
          { text: "2022년09월24일", link: "/TIL/202209/20220924" },
          { text: "2022년09월25일", link: "/TIL/202209/20220925" },
          { text: "2022년09월26일", link: "/TIL/202209/20220926" },
          { text: "2022년09월27일", link: "/TIL/202209/20220927" },
          { text: "2022년09월28일", link: "/TIL/202209/20220928" },
          { text: "2022년09월29일", link: "/TIL/202209/20220929" },
          { text: "2022년09월30일", link: "/TIL/202209/20220930" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,        
        items: [
          { text: "2022년08월", link: "/TIL/202208/202208" },
          { text: "2022년08월01일", link: "/TIL/202208/20220801" },
          { text: "2022년08월02일", link: "/TIL/202208/20220802" },
          { text: "2022년08월03일", link: "/TIL/202208/20220803" },
          { text: "2022년08월04일", link: "/TIL/202208/20220804" },
          { text: "2022년08월05일", link: "/TIL/202208/20220805" },
          { text: "2022년08월06일", link: "/TIL/202208/20220806" },
          { text: "2022년08월07일", link: "/TIL/202208/20220807" },
          { text: "2022년08월08일", link: "/TIL/202208/20220808" },
          { text: "2022년08월09일", link: "/TIL/202208/20220809" },
          { text: "2022년08월10일", link: "/TIL/202208/20220810" },
          { text: "2022년08월11일", link: "/TIL/202208/20220811" },
          { text: "2022년08월12일", link: "/TIL/202208/20220812" },
          { text: "2022년08월13일", link: "/TIL/202208/20220813" },
          { text: "2022년08월14일", link: "/TIL/202208/20220814" },
          { text: "2022년08월15일", link: "/TIL/202208/20220815" },
          { text: "2022년08월16일", link: "/TIL/202208/20220816" },
          { text: "2022년08월17일", link: "/TIL/202208/20220817" },
          { text: "2022년08월18일", link: "/TIL/202208/20220818" },
          { text: "2022년08월19일", link: "/TIL/202208/20220819" },
          { text: "2022년08월20일", link: "/TIL/202208/20220820" },
          { text: "2022년08월21일", link: "/TIL/202208/20220821" },
          { text: "2022년08월22일", link: "/TIL/202208/20220822" },
          { text: "2022년08월23일", link: "/TIL/202208/20220823" },
          { text: "2022년08월24일", link: "/TIL/202208/20220824" },
          { text: "2022년08월25일", link: "/TIL/202208/20220825" },
          { text: "2022년08월26일", link: "/TIL/202208/20220826" },
          { text: "2022년08월27일", link: "/TIL/202208/20220827" },
          { text: "2022년08월28일", link: "/TIL/202208/20220828" },
          { text: "2022년08월29일", link: "/TIL/202208/20220829" },
          { text: "2022년08월30일", link: "/TIL/202208/20220830" },
          { text: "2022년08월31일", link: "/TIL/202208/20220831" },
        ],
      },
      {
        text: "TIL📖",
        collapsible: true,
        items: [
          { text: "2022년07월", link: "/TIL/202207/202207" },
          { text: "2022년07월18일", link: "/TIL/202207/20220718" },
          { text: "2022년07월19일", link: "/TIL/202207/20220719" },
          { text: "2022년07월20일", link: "/TIL/202207/20220720" },
          { text: "2022년07월21일", link: "/TIL/202207/20220721" },
          { text: "2022년07월22일", link: "/TIL/202207/20220722" },
          { text: "2022년07월23일", link: "/TIL/202207/20220723" },
          { text: "2022년07월24일", link: "/TIL/202207/20220724" },
          { text: "2022년07월25일", link: "/TIL/202207/20220725" },
          { text: "2022년07월26일", link: "/TIL/202207/20220726" },
          { text: "2022년07월27일", link: "/TIL/202207/20220727" },
          { text: "2022년07월28일", link: "/TIL/202207/20220728" },
          { text: "2022년07월29일", link: "/TIL/202207/20220729" },
          { text: "2022년07월30일", link: "/TIL/202207/20220730" },
          { text: "2022년07월31일", link: "/TIL/202207/20220731" },
        ],
      },
    ],
  };
}

function getNav() {
  return [
    {
      text: "Menu",
      items: [
        {
          text: "TIL",
          link: "/TIL/202207/202207",
          activeMatch: "/TIL/",
        },
        {
          text: "TIL",
          link: "/TIL/202208/202208",
          activeMatch: "/TIL/",
        },
        {
          text: "TIL",
          link: "/TIL/202209/202209",
          activeMatch: "/TIL/",
        },
        {
          text: "TIL",
          link: "/TIL/202210/202210",
          activeMatch: "/TIL/",
        },
        {
          text: "TIL",
          link: "/TIL/202211/202211",
          activeMatch: "/TIL/",
        },
        {
          text: "TIL",
          link: "/TIL/202212/202212",
          activeMatch: "/TIL/",
        },
        {
          text: "회고",
          link: "/TIL/202207/20220722",
          link: "/TIL/202207/20220729",
          link: "/TIL/202208/20220805",
          link: "/TIL/202208/20220812",
          link: "/TIL/202208/20220819",
          link: "/TIL/202208/20220826",
          link: "/TIL/202209/20220902",
          link: "/TIL/202209/20220909",
          link: "/TIL/202209/20220916",
          link: "/TIL/202209/20220923",
          link: "/TIL/202209/20220930",
          link: "/TIL/202210/20221007",
          link: "/TIL/202210/20221014",
          link: "/TIL/202210/20221021",
          link: "/TIL/202210/20221028",
          link: "/TIL/202211/20221104",
          link: "/TIL/202211/20221111",
          activeMatch: "/TIL/",
        },
      ],
    },
  ];
}
