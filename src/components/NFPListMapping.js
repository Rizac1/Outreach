import React from 'react'
import { NFPListIndividualFrame } from './NFPListIndividualFrame'

export const NFPListMapping = (props) => {
    return props.nfplist.map((nfplist) => (
        <NFPListIndividualFrame key={nfplist.Email} nfplist={nfplist}/>
    ))
}

//export default NFPListMapping;