import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { AdditionalInfoContainer, AdditionalInfoList, AdditionalInfoTitle, AdditionalLink } from './additionalInfo.component';


export default class AdditionalInformation extends Component {
    render() {
        const {match} = this.props;
        return (
          <>
            <AdditionalInfoContainer>
              <AdditionalInfoTitle>Additionl information</AdditionalInfoTitle>
              <AdditionalInfoList>
                <li>
                  <AdditionalLink to={`/movies/${match.params.moviesId}/cast`}>Cast</AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to={`/movies/${match.params.moviesId}/reviews`}>
                    Reviews
                  </AdditionalLink>
                </li>
              </AdditionalInfoList>
            </AdditionalInfoContainer>
          </>
        );
    }
}