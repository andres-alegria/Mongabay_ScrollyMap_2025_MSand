const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmeqyjm1p009y01qwg89hg61f',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Shifting Sands',
    subtitle:
      'Kerala’s 2016 ban on river sand mining was meant to save its waterways and lifelines. However, it had an unintended consequence.',
    date: 'October 10 2025',
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
        zoom: 4.75,
        pitch: 0.0,
        bearing: 0,
      },
       images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Representational stone quarry',
          author: 'Superbmust',
        },
      ],
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
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
          fromLayer: 'kerela_quarries_0',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
 location: {
        center: [77.5, 11.5],
        zoom: 6.25,
        pitch: 62.0,
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
        mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
                  {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },  
      ],
        onChapterExit: [
      ],
    
    },


    // chapter 3
    {
      id: 'chapter 3',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Malabar Wildlife Sanctuary, 2015 (before the ban).",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
        location: {
        center: [75.90, 11.60],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization',
          opacity: 1,
        },
      ],
        onChapterExit: [
      ],
    
    },
    

    // chapter 4
    {
      id: 'chapter 4',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Malabar Wildlife Sanctuary, 2016 (after the ban).",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
      location: {
        center: [75.90, 11.60],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
         {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    
    },
    
        
    // chapter 5
    {
      id: 'chapter 5',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Malabar Wildlife Sanctuary has the highest number of quarries —15— within its 10 km buffer.",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
     location: {
        center: [75.90, 11.60],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    
    },
    
      
    // chapter 6
    {
      id: 'chapter 6',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The Silent Valley National Park, home to the endangered lion-tailed macaque, has three quarries just four kilometres from its boundary.",
           legend: [
      {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
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
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    
    },
       
   
   
      
    // chapter 7
    {
      id: 'chapter 7',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Some protected areas, such as the Aralam Wildlife Sanctuary, have quarries one kilometer from their boundary. Blasting increases noise and dust pollution, posing risks to both wildlife and humans.",
      legend: [
      {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
      location: {
        center: [75.84, 11.94],
         zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
        images: [
        {
          src: 'photo4.jpg',
          position: 'top',
          title: 'Aralam Wildlife Sanctuary',
          author: 'Manojk',
        },
           ],
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },
       
 // chapter 8
    {
      id: 'chapter 8',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "2011: Quarry footprint.",
       legend: [
      {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
     location: {
        center: [75.84, 11.94],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },

 
 // chapter 9
    {
      id: 'chapter 9',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "2016: After the ban, sites expanded.",
      legend: [
      {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
     location: {
        center: [75.84, 11.94],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },

 
 // chapter 10
    {
      id: 'chapter 10',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "2021: 90% of quarries had grown by more than 50%.",
        legend: [
      {
          title: 'Legal sand quarries',
          fromLayer: 'kerela_quarries_0',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
      location: {
        center: [75.84, 11.94],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },


 
 // chapter 11
    {
      id: 'chapter 11',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "This study doesn’t factor in the other illegal quarrying in Kerala’s Western Ghats.",
     location: {
        center: [76.0, 10.25],
        zoom: 7.0,
        pitch: 5.0,
        bearing: 0,
      },
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },

       
   

  ],
};
