module.exports = {
    theme: {
        extend: {
            screens: {
                //up-width
                'min-xxl':{min: '1600px'},
                'min-xl':{min: '1200px'},
                'min-lg':{min: '992px'},
                'min-md':{min: '768px'},
                'min-sm':{min: '576px'},
                //down-width
                'max-xxl':{max: '1599px'},
                'max-xl':{max: '1199px'},
                'max-lg':{max: '991px'},
                'max-md':{max: '767px'},
                'max-sm':{max: '575'},
                //between breakpoints
                'desktop-larg': {min:'1400px', max:'1599'},
                'desktop-mid' : {min: '1200px', max: '1399px'},
                desktop: {min: '992px', max: '1199px'},
                tablet: {min: '768', max: '991px'},
                phablet: {min: '596px', max:'767px'},
                phone: {min: '376px', max:'595px'}
            }
        }
    }
}