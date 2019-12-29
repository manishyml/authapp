export default class MovieCardModel {
  constructor(cardItem) {
    this.title = cardItem.original_title;
    this.rating = cardItem.vote_average;
    this.vote_count = cardItem.vote_count;
    this.adult = cardItem.adult;
    this.image = cardItem.poster_path;
    this.language = cardItem.original_language;
    this.relase_date = cardItem.release_date;
    this.overview = cardItem.release_date;
    this.genre = cardItem.genre_ids;
    this.id = cardItem.id;
  }
}
