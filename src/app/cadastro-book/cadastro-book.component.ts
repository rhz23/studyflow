import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-cadastro-book',
  templateUrl: './cadastro-book.component.html',
  styleUrls: ['./cadastro-book.component.css']
})
export class CadastroBookComponent{
  livro: any = {};
  livros: any[] = [];

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

  adicionarLivro() {
    this.livros.push({ ...this.livro });
    this.livro = {};
  }

  removerLivro(livro: any) {
    const index = this.livros.indexOf(livro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
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

  this.livros.push(newBook);

  console.log(this.livros);
  }

  cancelarCadastro() {
    this.livros = [];
  }

  saveActualPage(livro: any) {
    livro.actualPage = livro.actualPage;
  }

}
