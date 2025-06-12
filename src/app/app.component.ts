import { Component } from '@angular/core';
import { InvestmentInput, InvestmentResult } from './models/investment.model';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData?: InvestmentResult[];

  constructor(private investmentService: InvestmentService) {}

  onCalculateInvestment(investmentData: InvestmentInput) {
    this.resultsData = this.investmentService.calculateInvestmentResults(investmentData);
  }
}
