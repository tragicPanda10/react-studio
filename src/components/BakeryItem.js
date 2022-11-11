// TODO: create a component that displays a single bakery item

export default function menuItem(index, arr) {
    return(
        <div>
            <div class="fruit">
                {arr[index].name}
            </div>
            <div class="price">
               ${arr[index].price}
            </div>
            <div>
                <img src={arr[index].image} alt='fruit'></img>
            </div>
            <div class="desc">
                {arr[index].description}
            </div>
        </div>
    );
}