import { Component } from '@angular/core';
import { Book } from '../model/book';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-book',
  templateUrl: './cadastro-book.component.html',
  styleUrls: ['./cadastro-book.component.css']
})
export class CadastroBookComponent{
  livros: any[] = [];

  constructor(private router: Router, private livroService: LivroService) {}

  titleValue: string = '';
  isTitleLabelActive: boolean = false;

  onInputTitleChange(): void {
    this.isTitleLabelActive = this.titleValue.length > 0;
  }

  authorValue: string = '';
  isAuthorLabelActive: boolean = false;

  onInputAuthorChange(): void {
    this.isAuthorLabelActive = this.authorValue.length > 0;
  }

  themeValue: string = '';
  isThemeLabelActive: boolean = false;

  onInputThemeChange(): void {
    this.isThemeLabelActive = this.themeValue.length > 0;
  }

  dateValue: string = '';
  isDateLabelActive: boolean = false;

  onInputDateChange(): void {
    this.isDateLabelActive = this.dateValue.length > 0;
  }

  totalPageValue: string = '';
  isTotalPageLabelActive: boolean = false;

  onInputTotalPageChange(): void {
    this.isTotalPageLabelActive = this.totalPageValue.length > 0;
  }

  actualPageValue: string = '';
  isActualPageLabelActive: boolean = false;

  onInputActualPageChange(): void {
    this.isActualPageLabelActive = this.actualPageValue.length > 0;
  }

  removerLivro(livro: any) {
    this.livroService.removeLivro(livro);
  }

  salvarLivros() {
    // Lógica para salvar os livros no backend
    const newBook = new Book(this.titleValue, this.authorValue, this.themeValue, new Date(this.dateValue), parseInt(this.actualPageValue) , parseInt(this.totalPageValue));

    this.titleValue = '';
    this.authorValue = '';
    this.themeValue = '';
    this.dateValue = '';
    this.actualPageValue = '';
    this.totalPageValue = '';

  this.livroService.addLivro(newBook);
  }

  cancel(): void {
    // Navigate back to books-card component
    this.router.navigate(['/books-card']);
  }

  saveActualPage(livro: any) {
    livro.actualPage = livro.actualPage;
  }

}
