import React from 'react';
// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Controls from 'components/ButtonGroup/ButtonGroup';
import { SubHeader } from 'components/SubHeader/SubHeader';
// import Counter from 'components/ButtonGroup/ButtonGroup';
// import { state } from './data';
let allowedRender = false;

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  increaseGood = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        allowedRender = true;
      }
    );
  };

  increaseNeutral = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        allowedRender = true;
      }
    );
  };

  increaseBad = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        allowedRender = true;
      }
    );
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.bad + prevState.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalReviews = good + neutral + bad;
    if (totalReviews === 0) {
      this.setState({
        positiveFeedback: 0,
      });
      return;
    }
    let goodPercentage = Math.round((good / totalReviews) * 100);

    this.setState({
      positiveFeedback: goodPercentage,
    });
  };
  render() {
    return (
      <>
        <Controls
          onIncreaseGood={this.increaseGood}
          onIncreaseNeutral={this.increaseNeutral}
          onIncreaseBad={this.increaseBad}
        />
        <SubHeader />
        <div>
          {allowedRender ? (
            <div className={css.list}>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>Total: {this.state.total}</p>
              <p>PositiveFeedback: {this.state.positiveFeedback + '%'}</p>
            </div>
          ) : (
            <p className={css.noFeedbackGiven}>No feedback given</p>
          )}
        </div>
      </>
    );
  }
}
