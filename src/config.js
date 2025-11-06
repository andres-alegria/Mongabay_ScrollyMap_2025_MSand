const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmh336v58001n01qyg30n72p1',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Shifting Sands',
    subtitle:
      'Kerala’s 2016 ban on river sand mining was meant to save its waterways and lifelines. However, it had an unintended consequence.',
    date: 'November 11 2025',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabayindia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabayindia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría | Edited by Kartik Chandramouli',
 
  chapters: [
    
    // chapter 0
    {
      id: 'chapter 0',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The <b>Western Ghats</b> also known as the Sahyadri, is a mountain range that stretches 1,600 km along the western coast of the Indian peninsula. Covering an area of 160,000 km², it traverses the Indian states of Gujarat, Maharashtra, Goa, Karnataka, Tamil Nadu and <b>Kerala</b>.",
      location: {
        center: [74.455016, 15.283453],
        zoom: 14,
        pitch: 73.5,
        bearing: 37.6,
      },
      
       images: [
        {
          src: 'photo0.jpg',
          position: 'top',
          title: 'Anaimudi Peak',
          author: 'Mdmadhu',
        },
      ],
      mapAnimation: 'easeTo',
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
            {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
        ],
    },


    // chapter 1
    {
      id: 'chapter 1',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The construction industry is Kerala’s largest consumer of river sand. After the ban on river sand mining, miners turned to the hills of the Western Ghats, crushing quarried hard rock to produce manufactured sand, also known as <b>m-sand</b>.",
       legend: [
        {
          title: 'Western Ghats',
          fromLayer: 'Western Ghats Solid',
        },
        {
          title: 'Kerala state',
          fromLayer: 'kerala-solid',
        },
      ],
      location: {
        center: [75.0, 13.0],
        zoom: 6,
        pitch: 0.0,
        bearing: 0,
      },
      
       images: [
        {
          src: 'photo1a.jpg',
          position: 'top',
          title: 'Representational stone quarry',
          author: 'Superbmust',
        },
      ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
        ],
    },


    // chapter 2
    {
      id: 'chapter 2',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "72 legal quarries lie within 10 km of 20 protected areas in the Western Ghats, one of the world’s most biodiverse regions. Most expanded after the ban.",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
 location: {
        center: [77.5, 11.5],
        zoom: 7.25,
        pitch: 55.0,
        bearing: 60,
      },
       images: [
        {
          src: 'photo2.jpg',
          position: 'top',
          title: 'Mountains of Western Ghats',
          author: 'V.S. Iyer',
        },
           ],
        mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },


    // chapter 3
    {
      id: 'chapter 3',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "<b>Malabar Wildlife Sanctuary</b> has the highest number of quarries —15— within its 10 km buffer.",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
           {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
         images: [
        {
          src: 'photo5.jpg',
          position: 'top',
          title: 'Malabar Pied Hornbill',
          author: 'V. Patil',
        },
               ],
        location: {
        center: [75.90, 11.60],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
    
    
     // chapter 3a
    {
      id: 'chapter 3a',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "This quarry is located <b>within the boundaries of the Malabar Wildlife Sanctuary</b>. During its first year of operation it reached a size of 4 Ha. By 2021 it had expanded to 9.3 Ha.",
        location: {
        center: [75.955761, 11.5225],
        zoom: 16.30,
        pitch: 20.1,
        bearing: 35.2,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
  {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
    
    
     // chapter 3b
    {
      id: 'chapter 3b',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Located at less than 3 km from the <b>Malabar Wildlife Sanctuary</b>, this quarry expanded from about 16 ha in 2016, to more than 19 ha in 2021, making it one of the largest legal sand quarries in Kerala.",
        location: {
        center: [75.830261, 11.63],
        zoom: 13.75,
        pitch: 50,
        bearing: 35,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 1,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 1,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
  
     
     // chapter 3c
    {
      id: 'chapter 3c',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Here we see a satellite image captured by Planet Labs PBC in <b>2014</b>, showing quarry of 0.5 ha.",
        location: {
        center: [75.862938, 11.50543],
        zoom: 15.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 1,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 1,
        },
      ],
    
    },
    
    
     // chapter 3d
    {
      id: 'chapter 3d',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "By <b>2021</b>, two separate quarries had emerged, covering together almost 5 ha.",
        location: {
        center: [75.862938, 11.50543],
        zoom: 15.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
  
    // chapter 4
    {
      id: 'chapter 4',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The <b>Silent Valley National Park</b>, home to the endangered lion-tailed macaque, has three quarries just four kilometres from its boundary.",
           legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      location: {
        center: [76.4542, 11.1527],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
       images: [
        {
          src: 'photo3a.jpg',
          position: 'top',
          title: 'Lion-tailed macaque',
          author: 'S.J. Koottanad',
        },
           ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
          {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
                  {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
       
   
   
      
    // chapter 5
    {
      id: 'chapter 5',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Some protected areas, such as the <b>Aralam Wildlife Sanctuary</b>, have quarries one kilometer from their boundary. Blasting increases noise and dust pollution, posing risks to both wildlife and humans.",
      legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      location: {
        center: [75.90, 12.01],
         zoom: 10.25,
        pitch: 70.0,
        bearing: 90,
      },
        images: [
        {
          src: 'photo4.jpg',
          position: 'top',
          title: 'Aralam Wildlife Sanctuary',
          author: 'Manojk',
        },
           ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
                {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
                  {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    },
       
 
 // chapter 6
    {
      id: 'chapter 6',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "<b>By 2021, 90% of quarries had grown by more than 50% compared to 2011.</b><br/><br/>This story is based on the study by Ashok L, et al. (2025), which doesn’t factor in the other illegal quarrying in Kerala’s Western Ghats.",
     location: {
        center: [76.0, 10.25],
        zoom: 7.0,
        pitch: 5.0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0.25,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    },

   

  ],
};
