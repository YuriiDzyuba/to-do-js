import code from '../img/icons/code.svg';
import bell from '../img/icons/bell.svg';
import feather from '../img/icons/feather.svg';
import shopping from '../img/icons/shopping-cart.svg';

export const getImage = (category) =>{
    switch (category) {
        case "Quote":
            return bell
        case "Shopping list":
            return shopping
        case "Random":
            return code
        case "task":
            return feather
    }

}
