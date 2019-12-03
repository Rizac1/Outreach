import React from 'react'
import NFPListIndividualFrame from './NFPListIndividualFrame'

let NFPListMapping = (props) => {
    return props.nfplist.map((nfplist) => (
        <NFPListIndividualFrame key={nfplist.id} nfplist={nfplist}/>
    ))
}

export default NFPListMapping