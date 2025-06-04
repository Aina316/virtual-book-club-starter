const loadReviews = () => {
    let reviewlist = document.querySelector('#reviews-list')
    console.log('loading reviews...')
    for(const review of reviews){
        let reviewelement = createReviewElement(review)
        reviewlist.appendChild(reviewelement)
    }
}

document.addEventListener("DOMContentLoaded", loadReviews)

const handleReviewSubmit = () =>{
    console.log('handleReviewSubmit called!')
}
document.addEventListener("DOMContentLoaded", handleReviewSubmit)

const createReviewElement = (review) =>{
    console.log(review)
    const newReview = document.createElement('div')
    newReview.className = 'review-item'
    newReview.innerHTML = 
    `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button>Likes${review.likes}</button>
    <button>Reposts${review.reposts}</button>
    `;
    return newReview;
}