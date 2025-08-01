# Lesson 5 - Note (Lamda + Anonymous + DOM + Selector)

## Lambda Function
### Lambda function (Arrow function)
- Hàm nhỏ và không phức tạp, có thể không truyền parameter
- **Cấu trúc:**
```javascript
(parameters) => {
// Code here
}
```

## Anonymous Functions
- Hàm không tên, dùng làm đối số truyền vào hàm khác
- **Cấu trúc:**
```javascript
function (parameters) {
// Code here
}
```

## DOM = Document Object Model (HTML Object)
- **Example:** F12 on browsers
- **Thẻ mở:** `<tên thẻ>`
- **Thẻ đóng:** `</tên thẻ>`
- **Thẻ tự đóng**
- **Text:** nội dung văn bản nằm giữa 2 thẻ đóng và mở
- **Thuộc tính & Giá trị thuộc tính:** nằm trong thẻ mở, có thể có 1 or nhiều thuộc tính

### Thẻ thường gặp:
- `<div>`
- `<h>`
- `<form>`
- Thẻ input
- Thẻ textarea
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
- Thẻ button
- Thẻ table (thead: tablerow, tableheading, tbody: tablerow, td)
- Thẻ datepicker
- Thẻ slider
- Thẻ iframe

### App vẽ DOM:
**MindMup 2.0** (Google Drive → Tạo 1 folder → Chuột phải → More → Add tool)

## Selector
### XPath / CSS / Playwright Selector

#### XPath
- **XPath tuyệt đối:** bắt đầu bởi `/`, đi từ trên xuống dưới, đúng thứ tự
- **XPath tương đối:** theo đặc tính, bắt đầu `//` + tên thẻ `[@thuộc tính = giá trị]`

## Playwright Basic Syntax

### Test
**Syntax:**
```javascript
import { test } from '@playwright/test';
test('<tên test>', async ({ page }) => {
// Code của test
});
```

### Step
**Syntax:**
```javascript
// Step syntax will be added here
```

## Basic Actions

### Navigate
- Navigation to pages

### Click
- Click actions on elements

### Input
- **Fill** or **pressSequentially**

### Radio / Checkbox
- Selection of radio buttons and checkboxes

### Select Option
- Dropdown and select option handling

### Set Input File
- File lưu vào repo, **NOT local file**