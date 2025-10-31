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
        zoom: 6.0,
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
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'lines_text',
          opacity: 1,
        },
        {
          layer: 'lines',
          opacity: 1,
        },
        {
          layer: 'waterway',
          opacity: 1,
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
          opacity: 1,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
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
        mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
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
      ],
        onChapterExit: [
      ],
    
    },
    

    // chapter 4 (merged above)
    
        
    // chapter 5 (merged above)
  
    // chapter 6
    {
      id: 'chapter 6',
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
        center: [75.84, 12.075],
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
      ],
        onChapterExit: [
      ],
    },
       
 // chapter 8 (merged below)

 
 // chapter 9 (merged below)
 
 // chapter 10
    {
      id: 'chapter 10',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "<b>By 2021, 90% of quarries had grown by more than 50% compared to 2011.</b>",
            legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
           {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
               {
          title: 'Western Ghats',
          fromLayer: 'Western Ghats Solid',
        },
         ],
      location: {
        center: [76.0, 10.25],
        zoom: 7.0,
        pitch: 5.0,
        bearing: 0,
      },
      images: [
        {
          src: 'timelapse.gif',
          position: 'top',
          title: 'Before-After',
          author: 'Google Earth',
        },    
                ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
      ],
        onChapterExit: [
                            {
          layer: 'kerala-line',
          opacity: 0,
        },
      ],
    },


 
 // chapter 11
    {
      id: 'chapter 11',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "This story is based on the study by Ashok L, et al. (2025), which doesn’t factor in the other illegal quarrying in Kerala’s Western Ghats.",
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
          layer: 'kerala-line',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },

   

  ],
};
