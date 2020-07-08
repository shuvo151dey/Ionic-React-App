import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiCalculate: React.FC<{calculate: () => void; reset: () => void;}> = props => {
    return(
      <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.calculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.reset}>
          <IonIcon slot="start" icon={refreshOutline}/>
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
    );
}

export default BmiCalculate;