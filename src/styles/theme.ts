import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        black:'#13131A',  
        red:{
            200:'#E02041'
        },
        gray:{
            50:'#F0F0F5',
            100:'#F0F0F5',
            300:'#DCDCE6',
            500:'#A8A8B3',
            600:'#737380',
            700:'#41414D',
        },
        fonts:{
            heading:'Roboto',
            body:'Roboto'
        },
        styles:{
            global:{
                body:{
                    bg:'gray.100',
                    color: 'gray.50'
                }
            }
        }
    }
})


