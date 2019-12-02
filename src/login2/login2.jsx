// const React = require("react");
// const style = require("./login-2.css");
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
// import PropTypes from "prop-types";
// import { NoPage } from "../pages/NoPage"
import "./login-2.css";

export class Login2 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          value: " ",
          name: props.name
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
    handleSubmit(event){
      alert("Sending to landing page!" + this.state.value);
      event.preventDefault();
    }


  render() {
    
    return (

      
          <div data-layer="c7452585-caea-4810-9a1d-f84cc1136af5" className="login-2">        <div data-layer="b059cf48-fd24-4497-9276-321f3bc9b241" className="imagesvqo7cvl2"></div>
        <div data-layer="76029783-25ad-48b1-bc34-c41722f551a9" className="group-15">            <div data-layer="fdabd6ef-9294-4346-ab95-82b88aa962ed" className="group-14">                <div data-layer="162c9410-3b74-47de-94da-56553ef7288c" className="mcece5326503e000001378d1709bf"></div>
                <svg data-layer="bc4041a8-7c54-4923-9cf6-dfd2f2f03e68" preserveAspectRatio="none" viewBox="0 0 528.37255859375 791.7460327148438" className="path-19"><defs><pattern id="img-path-19" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlinkHref={require('./assets/path-19.png')} x="0" y="0" width="528.37px" height="791.75px" /></pattern></defs><path d="M 0 0 L 528.37255859375 0 L 528.37255859375 791.7460327148438 L 0 791.7460327148438 L 0 0 Z" fill="url(#img-path-19)" /></svg>
                <div data-layer="633406a9-3076-4780-9b1c-344eef0d788a" className="group-9">                    <div data-layer="e1e55448-bac2-4aac-9d8c-441b6e710ea8" className="rectangle-6"></div>
                    <div data-layer="9a8d9b75-8968-44d9-932e-02ce33d7241c" className="logina8601de3">LOGIN</div>
</div>
                <div data-layer="035a0e21-3502-442f-ae9c-19293d911ca2" className="group-10">                    <svg data-layer="31db5964-5695-47bc-835c-b660ef45e586" preserveAspectRatio="none" viewBox="0 0 446.45166015625 80" className="path-9"><path d="M 0 0 L 446.4515991210938 0 L 446.4515991210938 79.99999237060547 L 0 79.99999237060547 L 0 0 Z"  /></svg>
                   
                    <input data-layer="fc53f613-e6f2-4b13-ace5-60ef48bd6192" className="password" value={this.state.name} type="text" onChange=" " />
                    <Link to={"./noPage"}>
                    <div data-layer="5dc306cf-3f80-4b0d-adb4-533009639f8c" className="forget">FORGET?</div></Link>
</div>
                <div data-layer="3c64d33f-c43f-4d41-ad0a-199aa7b340c2" className="group-11">                    <svg data-layer="7aa785e9-ba4b-4ffd-b49c-68cae7e976cb" preserveAspectRatio="none" viewBox="-0.0000019073486328125 0 88.03515625 87.04544067382812" className="path-1"><path d="M 63.57954406738281 0 C 72.10227203369141 3.920454502105713 74.94317626953125 9.431818008422852 74.14772796630859 15.22727203369141 C 72.89772796630859 20.68181800842285 67.5 25.5113639831543 63.29545593261719 28.46590805053711 C 54.4886360168457 34.65909194946289 41.7613639831543 40.05681610107422 30.90909194946289 36.64772796630859 C 22.44318199157715 33.97727203369141 24.31818389892578 24.31818199157715 24.14772796630859 25.34090805053711 C 23.35227203369141 29.43181800842285 24.2613639831543 33.97727203369141 27.6136360168457 36.76136016845703 C 30.62499809265137 39.2613639831543 35.79545593261719 39.94318008422852 39.60227203369141 39.94318008422852 C 43.01136016845703 39.94318008422852 46.47726821899414 39.31818008422852 49.82954406738281 38.46590805053711 C 47.72727203369141 39.54545211791992 45.56818008422852 40.56817626953125 43.35226821899414 41.42045211791992 C 34.37499618530273 44.82954025268555 26.87499809265137 43.40908813476562 19.20454216003418 45.34090423583984 C 5.113636493682861 48.8636360168457 0 62.15909194946289 0 62.15909194946289 C 0 62.15909194946289 6.30681848526001 48.75 31.9886360168457 49.43181610107422 C 32.15908813476562 49.43181610107422 32.72727203369141 49.4886360168457 32.95454406738281 49.4886360168457 C 22.89772605895996 56.19318389892578 17.32954597473145 65.79545593261719 26.93181800842285 87.04544830322266 C 24.94318199157715 56.25 54.20454406738281 53.86363220214844 70.05681610107422 45.17045593261719 C 94.20454406738281 31.9886360168457 95.90908813476562 6.136363506317139 63.57954406738281 0 Z"  /></svg>
                    <svg data-layer="2357a941-3c38-4a53-8906-3fc1e1f6877c" preserveAspectRatio="none" viewBox="84.51481628417969 26.10000228881836 62.946044921875 105.17044067382812" className="path-2"><path d="M 133.4268646240234 78.37272644042969 C 137.8018493652344 80.98635864257812 141.0973052978516 81.66818237304688 147.4609527587891 81.38409423828125 L 145.2450408935547 80.19091033935547 C 142.2336730957031 78.88408660888672 141.7223205566406 78.54318237304688 138.9950408935547 76.61136627197266 C 130.0177612304688 69.90681457519531 130.9268646240234 55.75909042358398 130.2450408935547 45.64545440673828 C 129.7904968261719 39.90681838989258 129.1086883544922 34.56591033935547 127.2336730957031 29.85000228881836 C 126.7223205566406 28.60000228881836 125.0177764892578 26.10000228881836 125.0177764892578 26.10000228881836 C 127.7450408935547 35.36136627197266 127.5177764892578 40.47500228881836 122.1200408935547 51.61136245727539 C 116.2109527587891 63.8272705078125 127.2336730957031 70.53182220458984 119.0518646240234 71.66818237304688 C 113.4268646240234 72.46363830566406 114.9609527587891 73.42955017089844 115.2450408935547 76.38409423828125 C 115.4155120849609 78.37272644042969 114.1655120849609 78.48636627197266 111.9495849609375 78.71363830566406 C 112.2905120849609 82.46363830566406 112.5177764892578 81.9522705078125 109.2791442871094 82.46363830566406 C 105.8700561523438 82.97499847412109 109.0518646240234 90.87272644042969 102.1200561523438 89.33863830566406 C 97.80186462402344 88.37273406982422 95.24504852294922 84.16818237304688 89.22232055664062 84.28182220458984 C 74.44959259033203 98.88409423828125 98.37004089355469 108.4295501708984 107.2336883544922 129.8500061035156 C 108.7109527587891 120.81591796875 97.80186462402344 108.0886383056641 111.4382171630859 99.39545440673828 C 107.4609527587891 110.2477340698242 106.8927764892578 123.4295501708984 117.1768646240234 131.2704620361328 C 116.3814086914062 128.4295501708984 114.8473205566406 125.6454620361328 114.5064086914062 122.1227264404297 C 113.9950561523438 117.2363662719727 114.3927764892578 111.6113662719727 115.813232421875 107.0659103393555 C 122.2336883544922 85.75909423828125 113.7109527587891 120.2477264404297 136.2109680175781 124.0545425415039 C 131.4950561523438 118.9977264404297 128.8246002197266 116.1568222045898 129.3359527587891 107.2363586425781 C 130.188232421875 92.46363067626953 129.9041442871094 91.21363067626953 127.3473205566406 84.84999847412109 C 127.9723205566406 86.38408660888672 133.7109527587891 89.67954254150391 137.3473205566406 96.38409423828125 C 141.5518646240234 104.1681823730469 139.5064239501953 106.952278137207 138.7109527587891 114.6795425415039 C 150.5291290283203 90.81591033935547 132.9723052978516 87.91817474365234 133.4268646240234 78.37272644042969 L 133.4268646240234 78.37272644042969 Z"  /></svg>
                    <svg data-layer="ef40710b-f115-4675-a140-1630132e8d7b" preserveAspectRatio="none" viewBox="58.400001525878906 0.8999999761581421 15.482666015625 17.740631103515625" className="path-3"><path d="M 68.45681762695312 8.684091567993164 C 68.62727355957031 8.513636589050293 71.2977294921875 11.46818161010742 73.74091339111328 16.18408966064453 C 73.74091339111328 16.12727165222168 73.74091339111328 16.07045364379883 73.74091339111328 16.07045364379883 C 75.38864135742188 5.331818103790283 62.20681762695312 1.524999976158142 58.40000152587891 0.8999999761581421 C 64.25227355957031 5.615909099578857 64.76363372802734 20.95681762695312 73.1727294921875 18.34318161010742 C 71.2977294921875 14.4795446395874 69.36590576171875 10.27499961853027 68.45681762695312 8.684091567993164 Z"  /></svg>
                    <svg data-layer="b2fd1846-519b-4b25-9f4f-4f9eb7879a7c" preserveAspectRatio="none" viewBox="90.81636810302734 10.999996185302734 13.001953125 15.138427734375" className="path-4"><path d="M 95.12525939941406 17.13636207580566 C 93.70480346679688 18.61363410949707 92.62525939941406 19.69318008422852 90.97752380371094 23.61363220214844 C 90.97752380371094 23.55681610107422 90.97752380371094 23.55681610107422 90.97752380371094 23.49999618530273 C 89.27297973632812 14.57954216003418 101.6025238037109 11.22726821899414 103.8184356689453 10.99999618530273 C 99.89797973632812 15.09090614318848 96.31843566894531 29.46590423583984 91.60252380371094 25.43181228637695 C 92.34116363525391 21.73863410949707 94.15934753417969 18.72727203369141 95.12525939941406 17.13636207580566 Z"  /></svg>
                    <svg data-layer="b57835e6-cce1-41ef-941d-31f6155e6c74" preserveAspectRatio="none" viewBox="51.600006103515625 35.24740219116211 21.7412109375 10.48443603515625" className="path-5"><path d="M 62.05455017089844 38.68637847900391 C 64.27046203613281 37.72046661376953 65.97500610351562 36.98183441162109 71.08863830566406 36.81137847900391 C 71.03182220458984 36.81137847900391 71.03182220458984 36.75456237792969 70.97500610351562 36.75456237792969 C 61.77045822143555 31.01592636108398 52.79319000244141 43.3454704284668 51.60000610351562 45.73183441162109 C 57.85000610351562 43.11819839477539 76.60000610351562 44.14092636108398 72.85000610351562 38.28865051269531 C 68.36136627197266 37.55001449584961 64.21363830566406 38.28865051269531 62.05455017089844 38.68637847900391 Z"  /></svg>
                    <svg data-layer="b4e49f4b-ebb1-4466-b71b-e3bd842d109b" preserveAspectRatio="none" viewBox="7.599999904632568 66.02228546142578 5.24755859375 2.99871826171875" className="path-6"><path d="M 7.599999904632568 69.02098846435547 C 7.656818389892578 68.85053253173828 10.83863639831543 68.56644439697266 12.20227336883545 67.48690032958984 C 13.96363735198975 66.46417236328125 11.91818237304688 64.58917236328125 8.509091377258301 67.88462829589844 C 8.168182373046875 68.22553253173828 7.884091377258301 68.62326049804688 7.599999904632568 69.02098846435547 Z"  /></svg>
                    <svg data-layer="f05dc912-a596-40ab-8c61-5412418d7b13" preserveAspectRatio="none" viewBox="12 51.474700927734375 10.493896484375 4.171112060546875" className="path-7"><path d="M 12 53.98907470703125 C 15.40909194946289 53.59134674072266 16.94318199157715 51.77316665649414 19.95454597473145 51.48907470703125 C 23.47727203369141 51.14817047119141 24.27272605895996 57.00044250488281 16.14772796630859 55.35271453857422 C 14.32954597473145 55.01180267333984 12.79545402526855 54.27317047119141 12 53.98907470703125 Z"  /></svg>
</div>
                <div data-layer="5717b22e-5edd-4243-9948-b8570126ed99" className="group-12">                    <svg data-layer="fb805fb0-00f4-4a27-9ed8-13cce62e6c15" preserveAspectRatio="none" viewBox="0 0 446.45166015625 80" className="path-8"><path d="M 0 0 L 446.4515991210938 0 L 446.4515991210938 79.99999237060547 L 0 79.99999237060547 L 0 0 Z"  /></svg>
                <form onSubmit={this.handleSubmit}>
                    <div data-layer="0640736b-388d-40f7-a29a-82ca636e2a4a" className="email">EMAIL</div>
                    <input data-layer="6cbe6d15-6719-4022-9a73-14aeb083a085" className="elka" value={this.state.value} type="text" onChange={this.handleChange}/>
                    <div data-layer="b9560c3a-0aa3-4e98-aff8-8f009b016ab9" className="rectangle-4"></div></form>
</div>
                <div data-layer="5e02cc35-a40e-4d2b-a16f-c26bb02dd435" className="group-13">                    <div data-layer="7b7e25fc-0c41-4f62-ad00-a8c4f82503ef" className="loginccd6fcac">LOGIN</div>
                    <div data-layer="108cb9c9-a9f7-4cb7-b3c8-571442dc82e7" className="login1">                   <Link to={"./Home"}> <div data-layer="a2e9fd6c-7f6c-4db5-b5bd-b0dd319b3708" className="group-5">                            <div data-layer="f14c5cab-2002-4d11-b48b-697b096c5b32" className="group-4">                            <svg data-layer="a6f9d230-b4ca-43a0-9a8d-588e08ddbe68" preserveAspectRatio="none" viewBox="170.666015625 0 19.34375 29.01568603515625" className="path-10"><path d="M 187.5918121337891 0 L 173.0839996337891 0 C 171.7504577636719 0 170.666015625 1.084402322769165 170.666015625 2.417987823486328 L 170.666015625 6.649452209472656 C 170.666015625 6.983584880828857 170.9363861083984 7.253963470458984 171.2705230712891 7.253963470458984 C 171.6046600341797 7.253963470458984 171.8750305175781 6.983585834503174 171.8750305175781 6.649452686309814 L 171.8750305175781 2.417987823486328 C 171.8750305175781 1.751535058021545 172.4175415039062 1.209022164344788 173.0839996337891 1.209022164344788 L 187.5918121337891 1.209022164344788 C 188.2582702636719 1.209022164344788 188.80078125 1.751535058021545 188.80078125 2.417987823486328 L 188.80078125 26.59769248962402 C 188.80078125 27.26414680480957 188.2582702636719 27.80665969848633 187.5918121337891 27.80665969848633 L 173.0839996337891 27.80665969848633 C 172.4175415039062 27.80665969848633 171.8750305175781 27.26414680480957 171.8750305175781 26.59769248962402 L 171.8750305175781 22.36623001098633 C 171.8750305175781 22.03209686279297 171.6046600341797 21.76171875 171.2705230712891 21.76171875 C 170.9363861083984 21.76171875 170.666015625 22.03209686279297 170.666015625 22.36623001098633 L 170.666015625 26.59769248962402 C 170.666015625 27.93122100830078 171.7504272460938 29.01568031311035 173.0839996337891 29.01568031311035 L 187.5918121337891 29.01568031311035 C 188.9253845214844 29.015625 190.0097961425781 27.93122100830078 190.0097961425781 26.59763717651367 L 190.0097961425781 2.417987823486328 C 190.0097961425781 1.084402322769165 188.9253845214844 0 187.5918121337891 0 Z"  /></svg> 
                                <svg data-layer="b29482d3-acf8-4a59-bd59-fb9573a659c7" preserveAspectRatio="none" viewBox="0 128.00265502929688 21.76171875 14.5076904296875" className="path-11"><path d="M 13.49481678009033 141.4601440429688 C 13.24863719940186 141.6856384277344 13.23214626312256 142.0681610107422 13.45763874053955 142.3143463134766 C 13.57687568664551 142.4442443847656 13.73980522155762 142.5103149414062 13.90335750579834 142.5103149414062 C 14.04917335510254 142.5103149414062 14.19555473327637 142.4577789306641 14.31184387207031 142.3515167236328 L 21.56575012207031 135.7021331787109 C 21.69087982177734 135.5876007080078 21.76171875 135.4258575439453 21.76171875 135.2564086914062 C 21.76171875 135.0869750976562 21.69087982177734 134.9252319335938 21.56575012207031 134.8106994628906 L 14.31184387207031 128.1613006591797 C 14.06447315216064 127.9358062744141 13.68375682830811 127.9529113769531 13.45763874053955 128.1984710693359 C 13.23214435577393 128.4446563720703 13.24863624572754 128.8271789550781 13.49481678009033 129.0526733398438 L 19.60339736938477 134.6519012451172 L 0.6045110821723938 134.6519012451172 C 0.2703780233860016 134.6519012451172 0 134.9222869873047 0 135.2564086914062 C 0 135.5905456542969 0.2703780233860016 135.8609161376953 0.6045110821723938 135.8609161376953 L 19.60345458984375 135.8609161376953 L 13.49481678009033 141.4601440429688 Z"  /></svg>
</div>
</div></Link>    
</div>  
</div>
                <div data-layer="0045dd0b-ce13-4c63-b92c-5f4be8997eb7" className="welcome-to-outreachd">WELCOME TO OUTREACHD</div>
                <div data-layer="7d907e02-9bf7-4ffd-b6be-64ce8a98f9f1" className="join-our-community-and-lets-make-birmingham-a-better-place">Join our community and lets make Birmingham a better place</div>
                <Link to={"./noPage"}> <div data-layer="6133c9ab-07b5-471f-92e0-a1d498874835" className="dont-have-an-account-sign-up">Don't have an account? Sign up</div></Link>
                <div data-layer="0e3acf15-5cb1-46c5-a6b7-80a8874358df" className="login"></div>
</div>
</div>
</div>

    );
  }
}

Login2.propTypes = {

}

Login2.defaultProps = {

}


// module.exports = Login2;
export default Login2;
          