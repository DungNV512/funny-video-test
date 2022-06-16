import axios from "axios";
import { ENDPOINT_URL } from "../constants";

const getPublicContent = () => {
  return axios.get(ENDPOINT_URL + "videos");
};

const shareVideo = (url) => {
  const { v4: uuidv4 } = require("uuid");
  return axios.post(ENDPOINT_URL + "videos", {
    id: uuidv4().slice(0, 8),
    title:
      "Tumblebug：基於 pyspark 的大規模分散式資料庫特徵搜尋工具 – 賴東昇 (PyCon Taiwan 2021)",
    image_url: "https://i.ytimg.com/vi/d1iXJBlKl9c/default.jpg",
    subtitle:
      "Day 2, 13:55 ~ 14:25\n\nAbstract\n\n1. 緣起：從公司應用層面介紹為什麼我們需要自動化的特徵篩選工具。 2. 特徵篩選演算法：大致介紹特徵篩選之概念與架構。 3. Tumblebug 設計：介紹 tumblebug 的設計與運算架構。 4. 研究與應用成果：介紹我們將 Tumblebug 用於專案中的成果。\n\nDescription\n\n對於大型企業來說，如何利用資料團隊有限的人力，處理複雜多變的商業問題，一直是經營與管理層面致力達成的目標。為了達到這項目標，各企業紛紛導入自動化機器學習(AutoML)相關工具，進行『模型訓練』的自動化。然而，使用這類工具之前，仍須處理『資料搜集』此類更上游的議題：如何根據預測問題，從大量資料表中搜尋合適的特徵，並整理為一張資料表供後續訓練。此類任務通常仰賴商業分析師與業務端人員的合作，不僅需耗費大量人力與時間，且探索範圍無法涵蓋公司大量的資料表。\n\n為了解決上述問題，並完成資料搜集的自動化，我們開發了套件「Tumblebug」。由於 python 為公司內分析師與工程師們的通用語言，且能透過 pyspark 進行分散式計算，我們選用 python 進行開發。\n\nTumblebug 能根據使用者的預測問題，自動從大量資料表中搜尋有用特徵，並建立特徵資料表供後續模型訓練。針對千萬量級資料量與數百個資料表，僅需數小時即可完成搜尋，大幅減少人力與時間上的開銷。目前已實際運用於所任職公司的數個專案之中，並獲得優於「人力特徵工程」建模的預測結果。\n\n本次演講，我們將會分享 Tumblebug 的研究開發歷程，包含計算架構，以及實際運用於專案之中的顯著成果。\n\nSlides not uploaded by the speaker.\nHackMD: https://hackmd.io/@pycontw/2021/%2F%40pycontw%2FHySUfE5MK\n\nSpeaker: 賴東昇\n\n目前於國泰數數發資料科學實驗室擔任資料科學分析師，主要擔任輔助角色，擅長透過蟒蛇戰舞增加同仁寫扣效率(python 限定)，其他工作就看著辦，蛇。",
    time: "2021-11-28 16:04:59",
    url: "https://www.youtube.com/watch?v=d1iXJBlKl9c", // fake url
    author: "absdsdsc@gmail.com",
    vote_up: 347,
    vote_down: 67,
  });
};

const videoService = {
  getPublicContent,
  shareVideo,
};

export default videoService;
