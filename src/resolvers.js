let clouds = [
    {
        name: 'Cirrus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/8690313402_5f76f736b3_k-1-1024x683.jpg',
        description: 'Cirrus is one of the most common types of clouds that can be seen at any time of the year. They’re thin and wispy with a silky sheen appearance.'
    },
    {
        name: 'Cirrocumulus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/Cirrocumulus_in_Hong_Kong-1024x768.jpg',
        description: 'Cirrocumulus clouds are among the most gorgeous out there. These usually form at about 5 km above the surface with small white fluff patterns that spread out for miles and miles over the sky.'
    },
    {
        name: 'Cirrostratus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/cirrostratus-246295_960_720.jpg',
        description: 'Cirrostratus clouds have a sheet-like appearance that can look like a curly blanket covering the sky. They’re quite translucent which makes it easy for the sun or the moon to peer through.'
    },
    {
        name: 'Altocumulus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/sky-1430070_960_720.jpg',
        description: 'Altocumulus clouds form at a lower altitude so they’re largely made of water droplets though they may retain ice crystals when forming higher up.'
    },
    {
        name: 'Altostratus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/Altostratus_undulatus-1024x768.jpg',
        description: 'Altostratus often spread over thousands of square miles and are strongly linked to light rain or snow.'
    },
    {
        name: 'Nimbostratus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/1024px-2014_Nimbostratus_rekadr.jpg',
        description: 'These gloomy clouds are the heavy rain bearers out there forming thick and dark layers of clouds that can completely block out the sun.'
    },
    {
        name: 'Stratus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/sky-183570_960_720.jpg',
        description: 'Stratus clouds are composed of thin layers of clouds covering a large area of the sky. This is simply mist or fog when it forms close to the ground.'
    },
    {
        name: 'Cumulus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/cloud-8075_1920-1024x768.jpg',
        description: 'It’s the most recognizable out of all the types of clouds.These adorable ‘piles of cotton’ form a large mass with a well-defined rounded edge, which explains the name ‘cumulus’ which is Latin for ‘heap’.'
    },
    {
        name: 'Cumulonimbus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/dramatic-731245_1920.jpg',
        description: 'Cumulonimbus is fluffy and white like cumulus but the cloud formations are far larger. It’s a vertical developing type of cloud whose base grows from one to up to eight kilometers, hence it’s commonly called a tower cloud. For the same reason, cumulonimbus is both a low-level and high-level type of cloud.'
    },
    {
        name: 'Stratocumulus',
        link: 'https://cdn.zmescience.com/wp-content/uploads/2017/07/palm-trees-266438_1920-1024x768.jpg',
        description: 'Stratocumulus looks like a thick white blanket of stretched out cotton. They resemble cumulus clouds except they’re far bigger.'
    }];

module.exports = {
    Query: {
        cloud: () => clouds
    }
};