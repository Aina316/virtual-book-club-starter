const loadReviews = () => {
    let reviewlist = document.querySelector('#reviews-list')
    console.log('loading reviews...')
    for(const review of reviews){
        let reviewelement = createReviewElement(review)
        reviewlist.appendChild(reviewelement)
    }
}

document.addEventListener("DOMContentLoaded", loadReviews)

const handleReviewSubmit = (event) =>{
    console.log('handleReviewSubmit called!')
    event.preventDefault();
    const reviewInput = document.querySelector('#review-text');
    const reviewText = reviewInput.value;
    const title = document.querySelector('#book-title').value;
     const rating = document.querySelector('#rating').value;
    let review = {
        title, 
        rating,
        reviewText,
        likes:0 ,
        reposts: 0,
    };
    const newReviewElement = createReviewElement(review)
    const reviewslist = document.querySelector('#reviews-list')
    reviewslist.insertBefore(newReviewElement, reviewslist.firstChild)
    event.target.reset();
}
document.addEventListener("DOMContentLoaded", ()=>{
    loadReviews();
    const reviewForm = document.querySelector('#review-form')
    reviewForm.addEventListener('submit', handleReviewSubmit)
});

const createReviewElement = (review) =>{
    console.log(review)
    const newReview = document.createElement('div')
    newReview.className = 'review-item'
    newReview.innerHTML = 
    `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button>Likes (${review.likes})</button>
    <button>Reposts (${review.reposts})</button>
    `;
    return newReview;
}