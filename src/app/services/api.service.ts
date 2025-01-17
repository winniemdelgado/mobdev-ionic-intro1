import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://fierce-shore-08896.herokuapp.com/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/episode.json');
    }
    getCharacters() {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/characters.json')
    }

    getCharacter(char_id) {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/character.json');
    }
    getQuotes() {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/quotes.json')
    }

    getQuote(quote_id) {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/quote.json');
    } 
    
    getDeaths() {
        return this.http.get('https://8100-e6fe03bb-b324-455b-8733-5f60e110241b.ws-eu01.gitpod.io/assets/deaths.json')
    }
}
