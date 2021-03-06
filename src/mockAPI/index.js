const data = {
  user: {},
  videos: [
    {
      title:
        "Keynote: When everyone knows how to code in Python – 魏澤人 (PyCon Taiwan 2021)",
      image_url: "https://i.ytimg.com/vi/gkLyO47-6oM/default.jpg",
      subtitle:
        "Day 1, 08:55 ~ 09:55\n\nFirst you learn to code, then you code to learn.\n\nTen years ago, before the era of PyCon Taiwan. It was rare to teach Python in the programming courses. At that time, people who coded in Python were almost self-taught. PyCon and many Python communities were established for growing the community of Python programmers as well as for meeting and exchanging experiences with Python enthusiasts around the world.\n\nTen years later now, deep learning is becoming popular and Python is also the major programming language while PyTorch, TensorFlow, Numpy, SciPy, Scikit-* are becoming basic vocabularies.\nDo we still need a place to promote Python and exchange our thoughts when so many people know how to code in Python?\n\nExcept for promoting Python, advancing and sharing the knowledge in Python skills, my original intention on promoting Python to communities was to make Python as a basic skill and tool for everyone to do exploration, learning, and creating ideas. In this talk, I will share some of my thoughts and experiences involving Python not only at work but also in my everyday life.\n\nSlides not uploaded by the speaker.\nHackMD: https://hackmd.io/@pycontw/2021/%2F%40pycontw%2FBJY8P0_fY\n\nSpeaker: Tze-Jen Wei\n\nDr. Tze-Jen Wei is currently an associate professor at National Yang Ming Chiao Tung University’s School of AI, chief mathematician at iiNumbers, Inc., Google Developer Expert (GDE) in machine learning, Educate Cloud Ambassador at AWS, Hualien.Py organizer, Google Developer Groups Hualien initiator. Holding a master degree in mathematics, Dr. Wei had lectured in the Department of Applied Mathematics at Tung-Hwa University. Moreover, he also tutored Taiwan’s representatives in the Internal Mathematical Olympiad. Dr. Wei is an enthusiast in solving mysteries and challenging problems. He has been coding and playing math for more than 35 years. He also learns Chinese chess and magic. Moreover, he believes the perfect activity during leisure time is to read a book while drinking a cup of tea.",
      time: "2021-11-28 16:05:07",
      url: "https://www.youtube.com/watch?v=gkLyO47-6oM",
    },
    {
      title:
        "Keynote: Building next-level AI assistants – Yenny (PyCon Taiwan 2021)",
      image_url: "https://i.ytimg.com/vi/mZDmGP0OWv4/default.jpg",
      subtitle:
        "Day 1, 16:15 ~ 17:15\n\nAI assistants are the new faces of tech. We can now control our lights, play music, make an account transfer, and buy insurance from a chat or voice interface. Conversational AI opens up tech further to serve the people who were once left behind.\n\nBuilding AI assistants from scratch is very challenging. But now, we have much better tooling and infrastructure that make use of cutting-edge NLP research. In this talk, we will explore the current state of the technology: the level of experience we can provide for the end-user, the ease of building AI assistants from the dev perspective, and the maturity across different languages. We’ll also pull up our sleeves and develop an AI assistant together!\n\nSlides not uploaded by the speaker.\nHackMD: https://hackmd.io/@pycontw/2021/%2F%40pycontw%2FH1HD2WYGY\n\nSpeaker: Yenny Cheung\n\nOriginally from Hong Kong, Yenny is an engineering leader at Rasa. She and her team are working on the standard open-source infrastructure for building Conversational AI. She writes and speaks about Conversational AI, engineering management, and Python best practices. She cares about building inclusive teams with a “people first” approach. She enjoys the thrill of public speaking and meeting like-minded people along the way. You can find her on Twitter and at conferences on leadership and Python. She is also an angel investor backing founders from underrepresented backgrounds.",
      time: "2021-11-2816:05:03",
      url: "https://www.youtube.com/watch?v=mZDmGP0OWv4",
    },
    {
      title:
        "Tumblebug：基於 pyspark 的大規模分散式資料庫特徵搜尋工具 – 賴東昇 (PyCon Taiwan 2021)",
      image_url: "https://i.ytimg.com/vi/d1iXJBlKl9c/default.jpg",
      subtitle:
        "Day 2, 13:55 ~ 14:25\n\nAbstract\n\n1. 緣起：從公司應用層面介紹為什麼我們需要自動化的特徵篩選工具。 2. 特徵篩選演算法：大致介紹特徵篩選之概念與架構。 3. Tumblebug 設計：介紹 tumblebug 的設計與運算架構。 4. 研究與應用成果：介紹我們將 Tumblebug 用於專案中的成果。\n\nDescription\n\n對於大型企業來說，如何利用資料團隊有限的人力，處理複雜多變的商業問題，一直是經營與管理層面致力達成的目標。為了達到這項目標，各企業紛紛導入自動化機器學習(AutoML)相關工具，進行『模型訓練』的自動化。然而，使用這類工具之前，仍須處理『資料搜集』此類更上游的議題：如何根據預測問題，從大量資料表中搜尋合適的特徵，並整理為一張資料表供後續訓練。此類任務通常仰賴商業分析師與業務端人員的合作，不僅需耗費大量人力與時間，且探索範圍無法涵蓋公司大量的資料表。\n\n為了解決上述問題，並完成資料搜集的自動化，我們開發了套件「Tumblebug」。由於 python 為公司內分析師與工程師們的通用語言，且能透過 pyspark 進行分散式計算，我們選用 python 進行開發。\n\nTumblebug 能根據使用者的預測問題，自動從大量資料表中搜尋有用特徵，並建立特徵資料表供後續模型訓練。針對千萬量級資料量與數百個資料表，僅需數小時即可完成搜尋，大幅減少人力與時間上的開銷。目前已實際運用於所任職公司的數個專案之中，並獲得優於「人力特徵工程」建模的預測結果。\n\n本次演講，我們將會分享 Tumblebug 的研究開發歷程，包含計算架構，以及實際運用於專案之中的顯著成果。\n\nSlides not uploaded by the speaker.\nHackMD: https://hackmd.io/@pycontw/2021/%2F%40pycontw%2FHySUfE5MK\n\nSpeaker: 賴東昇\n\n目前於國泰數數發資料科學實驗室擔任資料科學分析師，主要擔任輔助角色，擅長透過蟒蛇戰舞增加同仁寫扣效率(python 限定)，其他工作就看著辦，蛇。",
      time: "2021-11-28 16:04:59",
      url: "https://www.youtube.com/watch?v=d1iXJBlKl9c",
    },
  ],
};

export default data;
