var product = [
    {
        'Loại': 'Sữa tắm',
        'Tên': 'Sữa tắm LifeBoy',
        'Giá': 125000,
    },
    {
        'Loại': 'Sữa tắm',
        'Tên': 'Sữa tắm Dove',
        'Giá': 125000,
    },
    {
        'Loại': 'Dầu gội',
        'Tên': 'Dầu gội Sunsilk',
        'Giá': 125000,
    },
    {
        'Loại': 'Dầu gội',
        'Tên': 'Dầu gội Dove',
        'Giá': 125000,
    },
    {
        'Loại': 'Dụng cụ học tập',
        'Tên': 'Bút mực Thiên Long',
        'Giá': 125000,
    },
    {
        'Loại': 'Dụng cụ học tập',
        'Tên': 'Bút chì Thiên Long',
        'Giá': 125000,
    }
]
var type = prompt ('Loại sản phẩm')
var nameProduct = prompt ('Tên sản phẩm')
var price = prompt ('Giá sản phẩm')
product.push({
    'Loại': type,
    'Tên': nameProduct,
    'Giá': price,
})
console.log(product);
// function show() {
//     console.log('Danh sách');
//     for (let i = 0; i < product.length; i++) {
//         console.log();
        
//     }
// }