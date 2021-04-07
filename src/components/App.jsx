import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXFxcXGR4aGhoaGRgdGhoZGhkaGiIeGRgaISwjHR0pIRkdJTYkKS0vMzMzHSI4PjgwPSwyMy8BCwsLDw4PHhISGTIgICAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIvMjIyMv/AABEIAYMAggMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwIDCAH/xABIEAACAQIDBAcFBAgFAQgDAAABAgMAEQQSIQUxQVEGBxMiYXGBMpGhscFCcoLRFCNSYpKiwvAkM7Lh8VNDY4OTo7PT4hc1c//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHREBAQADAQEBAQEAAAAAAAAAAAECETEhQQNREv/aAAwDAQACEQMRAD8AuaiiigKKKKAooooCiiig0zSqiszEKqgkk7gBqSarzavWC5Yrh1CoNA7i5Pjl4fGsus3buXLhUO+zSeJ3qv8AUR92qyV2kbKtzrqRuv4H8vfWMsm8cftWJB0rxK2eRyUJtmAQAefhUx2Zt9JFDMQVP2xoPUcqqPHxpHgJQSpkJAQFiDmWxbJqSxAOo3ajW9Y9CMayhszZu8gItr3gQNTvUm6jk2XgTUlaslX5RTN0dxRZGQm5Qi33GF1+vy4U81uXbnZqvaKKKqCiiigKKKKAooooCiiig8rRipwiM7eyqljzsBfSt9MHTWbLg5dbZrD4g/IGpVk3VM9IMa80zSNcvK38IO4D0Fh5UqwOEtkRfaJ3+J3n3UkwIzyE6b2v4Fd3wyn30+J2kZzomYrdRyvkO/1AFcbXomKRS7CaSDs45CgCkMvB7g+0d51N+XwslwvR0xYTKxUsA4BG9QbOADyDR39acdibf7QmGSJopQt7HVSNNVbcRrW3EbbjdJI1D3FhfKQt2Dbid+gO7nWJld6dMsZrZy6JPmbNzjAI8muPdmIqVVFuh0ds3goHqWP5VKa9GPHky69ooorTIooooCiiigKKKKAoopPisUiC7sFHjvPkN59KDfVcdZ21wB2QIsgu33iNB6DX1qR4zpXFHplcAiyuVHZ5/sqxButzxIA1tvqneneJezFs12vqQRmLNqSTvNqxbvyN4zXtIuhmKDyyLrqtxfmPCrOwEojbKftFyfRyKpLYW1P0eZZLZgD3gOKnfY87VbHSAmKWJr2WTtFzcmzlx65ZAfQ1z/SeO35X0+7LkSTFsAoORDc8dRw8NaX7VjjWMWUXzaegYX9L/GmbYmGmDB2SNja2fIb28SsnHlatmFx36VP3WDRqQiEbmNwzuOa/5dj51yxjv+niV9HcNkRj+0fkPzJp4qAYXrLwKRfrnKsJJEyqjvojkAkgWF1yta/GpZsfbeHxSh4JFcEX0323bjrodDyNeuceHL27OlFFFVkUUUUBRRRQeUUVG+l+0CkYiU96S+bwQb/edPK9S3Sybr3HdILkpBY85D7P4Bx893nSCPCZ2zuS7c2Nz/fhSLZ0G7lUkw8YsKz1vWiSbCJkYSBchFmzWAseZNMuH2etnwswWWMDNGWs2eJt1zzXdfypwxc0WKafBzQyiNFBZyCEca3CMNSQBr50mhxEEkEEmHDhY27GNLMrEA9mUF9Ru9o7t9SioOnPRA4KQNHdoJD3DvKE/YY8eNj4epnOBxS46FEYj9YiyIT9mWMBGB8xl99Snb+BjniaCbQOMoZwLBtLNHKNzA2IVtTaqPgmxOBxSxOzr2b2ZMxyG+mYcCCGzA+IplNxcb/m7WftV3jw5hVmUN3TrwO8A79az6MoYZJXPsJChj5a9oSR63+Fa9qjtI1kU3Fvc1qbth4myzRHeFB1Otir/lXDDyvVnqzaG9HNopHipIpxeCVisyncoY2z2O4oSCTyDc6kmwIZNn42aAXyoDMn/h2LAeDx5gfFVPAVDtqK0GMdwba9op5ZiCT6En3VajYbtsZhsSAoEuCmOmpLhVQ+SgzWFej48sWbHLwPvrfTQhZHkMsqlGdFjU5QULALkzfazMAQDrdiOVOkZ4VqVzsbKKKKqCiiig8quduYntMXIeCHsx5Lof5s3vqw3awJ5C9Uwm18rXeMqWJb9Y8cbEk39l2B48qxlW8InOzUp5MiopLEADjUO2X0h3AQ5vKaI/WnuJmmIZ1ygeylw2U/tMV0vy38TypK1WjaXSdInCnKrMGKhlkZiEXMdI1OXQX7xF9LUn6NdJ8PjZDkkUvGpAjsUNjoXVW1OmlxoAeFMnWbjuxwz23uVjHG5IN/5GlF/KqZVnRg6llcWKspsw5EEajzolq7esLpJPg5IeyQMHuGDglHAsAmm5mzE8+7xpj6ytipJg4MaIxHKBGsiLquWQXA4aqxsDxBPhSTYXWO2URY6NcTEQFZ8q9pY3vmU92RRpyP3qk3TXaGHxGyJWw0iSIrRaKbFP1sYCslgU32sQKCGbP2jIkQkQ5slg6G+WRN2vIi9weFzvuQU+ytoF8ViCAVEkbZQd4C2AvbS/eNbui6ZkaNhoRYjmGBH5e6m3Y8LRz9mbGQB1H74sQRc7m0v/dqxr2usvkhX0ywfaRRYhRp7D+GbVfTMXHuqQdH9uhNnYSRoy4hnaGVwdUV0YAMD9h75T4gEd7LSnovh48TFJA98jgqeBW5uCOTK2vmKaugUPZY3EbOxIUx4lXiZT7JkjN1I1vqLkcdQauN+M5zXq04cLAS7OGLSNHI5szAmK3ZuRqFbRSbDQjwvUhRwbMCCCN4NwQd1jUH6f7LLwLJEWWaKwjZDZhY2spXdrfStvQfpI0mHBxCOkimzAo47++6rluFcd4C3tCQbgK3HOxOqKKK0wKKKKDAi+h1Bqrel/RzCw4lOwhWMupZ8t7Mcxt3b2G47rb6tSq36bYsDGAMD3YlGmu8sdbbt9Zy41j1s2VggALWvSrau3I8LGWZlW1rk3sL3sABqzGxso146AE014TpBDawY5joAQwueV7WB86gXTedsQ5tJcRFlZdwEmmc6cRonkmm81mN0h6ZdKf00ABWVYySC1sz5tzFRcLlNwACfbOpqIBqVO2VWUrq1hffpe+nLdSRd9bjFKoJbaEfQ++lsK7mtc3tY7xoTvptFKoJSKLE16HydpJIOSrpbdqB/UKlr9DxJDMQMsplzxNxXKiAC/IkN76h/V2QZZLncijzJkD/ACjPuq0dq9KsHhGMcshDjUqqOTrqNQLbvGuOc/jt+d/qG9XrP+lzxyLkkABZeAaxBt4Erf1ph6UYy20p5oyY3inAU21DRIiFgDpvQkcwamHRnaGFm2g0sMl2awKlSpK62OvI399QrpyFGNnI+0wc+OZAf6RWsffWc/PFl9AekJxi9m6Zcn2Sc2VlKG4beysHuL6gqwJOhqf5Re9tR9f+Kqzqb2U2STElrAyZQvHuoL6/snMPVfOrVrpHLJ7RRRVZFFFFAVVfXX0gkgiiw0fdM92dxo4WNlIVSN123nkLcatSueeunaol2j2YBAw8aob8Wb9YSPCzKPQ0Ih6bTnuP183n2j/nWzCSkM6kkknNrqW35hrvJBv5im+MXBtrblvpZjMQGKOCMwVQbCxuBvPAnxHhUbacVGSfDhSCnhUuqniST8qTbVw2RrgaN8xv+dSVLCa/xrdEPhSdDpat8V9/CqRKOiT5ZYh+3KSfJIpFX3mVv4TUi6UBZsTiJFXMUfKbWDEKFTU6aAgHf9o8qiHR6YLiI3O5Tf0AJP1pwwEj5nkLWDPeTkVcm5v6mudbxp46AC20ISQdUPG97caYtvzB8VPyEjx35COQoP5Spp36OyCLGxM1gVzISP3QRv4ncKi80pLyOftyO58ATxvx/wBqRcuugOrWNV2bCVB7xkY33/5jj5AVKqhPVLPn2ZEM2bI8i7wSP1jNY23aMDbkRwtU2rpHKvaKKKqCiiigK5O6SYztsZiJSSc8zkXOuXOco8gth6V1HtjGiDDzTNujjZz+FSfpXJet7nU8fOpVha8TIquGKk7iuoHg3+161w4dpXsbAjVmHEancOJtvpW+GtEHDLqfZubm3G1t45gnfSjZSd29tSSPhpWdt6CR6KPGtu0YAyP4AsPAqL/T416o9nzrdipVRHZr21Hj3hb61BEVaxrcgHv5Votu/vnW+NQRv9K2zCiKTLqCb2I9CLfWnjZbsVZSdAL+gN93LfTKJWQ2IHqKkHRcgTpJIt4VcByRmVUfQhl+0ADe1jurNajDA4m8wkJ/yxlFgLZsuUnTwC/E0nyktlTKCbangBvy+J04E8udSPESh8UirLF+hdundDxJlTOAw7MkSxpbOBcAAWPI0y9Iox+kSJEFyGTIoBLAC43Mb5hddDUFldTcrI2JgZg3sSLlNxxRrH+H3VadU51SuFxjpdf8hhYG/svF8rn3mrjrc4zl17RRRVZFFFFBD+tWUrsrFEcQi+jTRqfga5vh1NuddLdZUGfZeLFr2jzfwMr39Mt/SuaIFuwHjapWoeMXCBho7DVZGzb/ALQFt/3fgK3bLH6seLfkPrWraqskaoSMgJOm8n60qwyZYwvEKD6sbn4isVp6eHmfnWna8+VHFgcxtr4i/v00ra51Hn+dNG257tkHCx9bfl86sKayb+lbYzbcBWtRWWWtMnHAYCWdwka5mNzqcqhRvZnYhVUcSTVgQdFo4IjHJJmcuBIwzdk36tiY4gLO1mMeaTui2dQVKk1DcOnaJh0RTKQXLRR95yoIcgqpJ1AJ4WzHlVh7ZQGeMFSUeVrg2N/1sstr66sZI3ygnN2iHUCxypti6NQSGV45GhzsGiBRpFyHMEzjNnu57oZbjN3SL5c0ZlwRZGl7UEgZgIiWGhXNnc5SvdYtlAJtvtuqXyTB8TNd5AihjqWCrF2DhwrclHfFjdWJAuRemjpOpwU0qqydtLJ2xGt4g5kIXLfJms2bUGwYAjdZVhX1aYjLtGAhVUS9olgLAfqmew8BkUepq+K5r6H4vJjsHc2/Xou/SztY8OJa3pXSlWM5PaKKK0yKKKKBr6SwZ8HiU354JV98bCuVMETnUi19+u71rrTaKZopFuFvGwudwup1PgK5KwZOYWNt2tqlWHuaQTyRKRqGJYbwFXXS2ltLUumG/wBP9RrXslC07m6tkQ3O4nM6gG3offW2f+/Q/wC9Yrq0W7vlrUXxMhZiTa55VJZnyxsx4D61GMt6uLGTwVsRRz+dYKNQKVGDhvrSRuwhKsGVirKQVYMylTvBDCxB03g1YuyekZeOM4ws7aWlCK2dlciMSxnLdxuDqysLLdiCbQ6XZapD2hPeIOXW1rLmGluYI317sbazooVioEUb2Dg2LEPl3WsQX94HG1Za0mr7Xw0CFYVQEE5FKCNNCWDFXkkZu8FcLdVJ9pbrpCMQxkLu7ZpGYszE3LE3uTxJNK9txBoY2kjMczyOFUZlDIoOZmje7LlYhAbgEq+l1uWIYMoyaZlYd7Tdqfd/zQSLoj0eOMxIRZxE6qXDFVY3Ug2VC6knW9wdLbta6NgJIGb2hoeRNt4FzpXN+xdsfoUglSNWc3VWbtDkJFtLOuhBNwb7ha1Xz0SaZ8LHLORnlAkyr7KqfZCm5JutibsdSeGlWJkfqKKK0wKKKKBBtefJBK9lbLGxs3smynRvA1UexuhuCkNygNz7Id/h3xVyzwq6lGUMrCxBFwQedc0bfxs2Hx88MM0gVJnRbMwsofRdSd26/hWbK1jYtnEdX+CjjZ4UMchW1+0kbS4axVyeIG6qrla4X1+NjS1+mGIdokZikdiruLntCfZLMRca23G3PSkmJWwTxA+IrN63OGra8lkC/tE38lsfnamW9LtryXcDkAPU6n6e6m9jWozWeHW7eVO2Cw+dwOF9fKm7DJp51J+jyWkAP2038iCPne3qKlJCjGW/RkQ784XXwNvdqab0jFybCxJHpbX60o2jJaTL+zmY+tgPhXiL7C+V/X/mo2RY3EGTEopJIjQqLkmy2NgL7gARpWyYd63l/UaQ7PlDTyMNxVrfdzAC/panCRgZPC4+TVazGGIiunk4+IIroDoHis+z8Ob3Kp2Z842Mf9NULI+WOR7eNvW1XL1VTF8G5K2Xtny+IKoxt+In40xMuJxRRRW3MUUUUBXJe2ps+MxEn7U0je+RjXWlcrdJsA0O0MTE1lKzMRwGVmzqRyGVgfCpVjR2DMzxkkMo0sdBlGf10+NP2P0VCdO6pPuBpJtLZsiRx4wuD2rkEIQcqHQFiNzE3FvFa07ZxX+Fi11YBfEiMZCfXL/NWb63PEelkLMWPE399YRrdgPGsL1vw0ZJNuR+VvrWmC/DpoPIfKnzZyEsGG9FuPfuPwptZbEgc7UrgxGRWsfs2rFdI2YdGnnyILvI4UDTWwzEa+tZbWglhVmkRkIDJcjTPbKAG3EjMDpWzo3iGw8nbBUcqhuj3se0FjqNVNgRfXQ7qw2zj1WCcrKzyYt1zqVZMgVjK9xcq13yBSCbAHde1VEc2Y4BfnlsP4gT8qdcDPG+Ud7tc99LdmI8pHnnvre9rEaXpv2EgLvfgl/5lrdjo2jkEi71IuPC3HwO6rUnDrMl42H7WnvNXr1eYXs9nYcWtmQyf+YxcX8bMKoqVwY1I+0FPoRfWuloQMosABYWA3AW3CpiZttFFFbYFFFFAVUnWt0HaWT9Owys0ht2sY1LBFsGQftBVsV42Ftb3tutM+9fvfQ0HP8A0SgwksDxdn/iCXMua5DxDvLlF7DIRY6A3sb8o500YLieyUBVhRY8o3BgoLeuY2PlV4dI8LhMIz40xIr9nL2jDQyHLlVSN2ZmcC9rk2ve1c6Yh2dizHMzEsxO8sTck+ZNZk9bt8aQKccIlrH95fcGB+lJcNHc35UtTh5/7fWlSFSy94nmaFOY5f2mA9OPwBrSg71qUQOFkv8AsKW9SPyqNF4fuuebWH3VFt9Me2X7yryBP8R/+op+xGHMaop1IUE+Z31GNoPeRvA2/hFvmKsTIu6Pe1J//MH/ANRB9aeCe+PL+lvzFMnR5wJGBNsyMPUFW/pp5LBnspF0W7Am2+1gL+0xFzYa2BPCperjwYxtD+6v0t9a6WwvsJ90fIVzHOfa8b10xs57xRnmiH3qKYpmVUUUVtgUUUUBXle0UFRdeeNyxYeAb3d5D91FVQD4EvfzWqYtw51Netba4xO0pMpusAEK8roSW/mZh+Gojhkvc+lRqNiJYf3/AHvvWTDh5289KycW/v1rBW3ef5VFbs+t/C3vpd0dwjTzNe+S+Zre1lBAAX1tc8s1Nrmym3l9B86UbPWx3kWUgEEggnTQjUf71FPeMmSRpOzbMIiQb6EqguWU7mGh3a6XtaoXIdSfE/OpXjXWOCRVjCFzlJUtZgCToDuByai9tBa1ROrimRTstQZUBNszZb/e7v1pz2lhyWd1LXDqbacjY+e+mRWIII0INx5jWphjkGrj7bAj7trj50pib1kupJ3jf5/lXTWyUywQryjQe5BXNKRlyFUauQo8zYD4mun0WwAHAW91MTJsooorTAooooCmLpjtn9DwU84tmRLJf/qN3U04jMQT4A0+1UfXvtMiPD4ZT7bNI/kgyr8XY/hoKZkYk7ySTqTvJPE+NOKplW3IU34dbsPClzvc1G41SmsY94/vhWpnrNDuoNmIPet43PuAH1pw2RHmYcgcx8hr9KbcNE8hfIjOQLnKL2UaVIuj2FuCpveQql7bs51PoNfQ1mrDft6eyxJYXKZzrxl11HA5FQ/iNMLU4bZxYmlkkAsHclRyQd1dPuhRTaxNWM2sb1K0fNh42/cX+QmP+mopenVMTIIkCglVzZrA2IDFtSNw18KWGNSbothu0xuGTnNGT5Iwc/Ba6Ornvq5xSzbSw5CqhzuxRb2W0Uh7t9baV0JSGT2iiitMiiiigK5l6x9u/pePlcexGexj+4jNdvHMxZvIirs6yekBweBkdTaSU9lHzDODdvwqGPmBzrmlRqKlWFOHS1v73f2a9LaGsyNB7vnSeU2NqNNVZs2npb32/KvAvzI+v51i51tyoh02TtExo8YAV3PdkLZQpy5e94AE2PAn1D0srw4c9p/mqDlOlwHBiBYqbMbFmB5KDc3FRqBdD6fP/etmKmyqFHn5k6D3D51LFlIZN5sdN1eBPGsLmswarIcWp/2HrA3MOw96p+Rpgc6U89HX7rjkyH/Wp+YqXjU6lXVdswHakLqxXIruQBp7BQjyOeugqp3qdwt8XM//AE4Qnq7j/wCM1cVWM3r2iiiqgoorXI4UEk2AFyeQFBRPXdtftMYmHB7uHj1H/eS2Y+5AnvNV5ElrX5X99KtubQOKxUsx/wC1lZxfgpPdHoth6UnA324n5aVGozLUmn3mlLxkKb8RSZzcCi14rW94rC/HnXr7rU64fEwphihRHZzZrjvoQfaRuFhu1sSxuDuBCOPd/fhWnHSEtbyt7qeINjyyPaBGk7quLAAqr3tnzGynQ8bHfupinfM19/CpC8etEw4G3Ph768VaV4PaBTQqGGnGxtyvTom0MMR34u9xJRdfXWqaR6Sl+xmsZPuD/WlGNxUWvZpb0ArHY0eZnH7n9aVPh9XP1MOhWdu0QySFO5fvhUaRb2O8HmKtOue+jnQGbFwNisNPklilKIpuoOVUe6yrqjXY8PUVZnVy21Aske0VNkyiJ3KFyRmDBijHMPZsx366nhYl6nNFFFVBUO60tsfo2zZiDZ5R2Keclw1vEJmPpUxqmevraBvhcODpZ5WHG+iKf9dBUsAtc8tPWlUa2tWqEaKviWPyHypQzVG2OJfu0lC6gVnK9xbxrEG2vKg0tvNKMGxVsy8jfiCCNQQd4I4UmHzp0wEF/KxLHd3QLn4USHLBdI5sMkwTIDNYuzIS2g0C94AAXNgQd5qLRRljYb7UrxRzBm8ddbgE3IG7TQfCkkUhUgjeKQr3syDY6HlxrO5tz9Kd4NqxsuWROQvYMB42NrHx1pRIcEQTuPCwlHyFr1DSNMdacuj5/W2/aRh7lzf01oxckdrItvE3+tebKlyTRt+8B6HQ/Or8SdX31OTf4bER8UnLejogHxQ1YtVT1QSWnxac1jb3Fh9atWk4Zde0UUVUFc09ae1P0jacxBusVoV/8P2v52euitq41YIJZm9mKNnPkqk/SuTc7OzSObsxLE82Y3+ZvUqxsT6f7fSscQ/Cszp6CkhNzRpmBXj8vfWS6C/KtLH40RshW5qb9EZcPAO0xMbSB1IRAqtoNMxViBvvbf7PvimzcKZHVAbX9puCqNWYk6AAAn/mtuLxueRmUZYxZEX9mNLhR521J5k1KsOvTXpFFiAsUMRijRsxuEW7ZcuiISANWO8nXwqICs5WuTWFWM2+s69JrE0HdQYGgGiiqi5OqDF5sa//AHmHLeqvHf4k+6rorn7qXxH+NjXjlkX8LLnHxQ10DUi0UUUVUQDrj2n2OzWQe1O6x/hF5G9LJl/FVCIllQc7sfIEj6GrH689p5sVDhxuijLn78psPcqD+Kq/dNT+6oX5n86zWoRyPe/n/fyrUg+H1ry/9+tZLuqgduHqawQXNeM3xrdBGTYDexAHmdB8aBw7TsoCR/mTGw5iJd+nDM2nkp50kkNlHlXuPkzS5V9lLRr91dPibn1pVBsvEThuwhllyWz9mjPlve1wo45T7qKZmrwClWKwMsWksUkZ/fRl/wBQpLeqwyNeNXteNUVjRRRVRMeqrF9ntTD3Ng7MnqyMo+J+NdNVx/svFGKaKVTYo6sPNWBrrrCzh0R19l1DDyYAj50Vvoooojl7pdtB8TtOaR1yntSmW98oi7gF+PsXPiTTYXzK54sx/v41c/SbquWfFPiYJVi7TMXRlLL2jb2Ug6XuSRz1pjxHU1MEsmLjcgaZo2QX5XBbTx+FZ01KqRhasS2nwqXdIOgG0MMmd4TIgHeaI5wLcSB3gPEi1Q4mqDeaddnCzF/+nG7j7wGVf5mWmuMa06BwuGc8ZXVPwpd2+OSpSEOFU3uOAv8ASr/6mtmGLAmVhZsRIz3/AHE7i+lwx/FVDYde6beA+tdQ9Df/ANfguH+Fh/8AaSrC8PDKDoQD51DOnewcGuCxUxwsAkWFyr9mgYNlIU3Ave5FvGptVZ9eO0HjwKRrbLPKFfnlQdoAPxKDfw8arKgq2wRZmVd2ZgN195tu9a1KdaUxCzBgCSpDcB7Op1qKsHaHUzjU1ikhlHK7Ix9GFv5qhe2ejGMwuuIw8iL+0RdNf31ut/Wur4XzKp5gH3i9esoIIIuDoQd1qqONq6W6qdtDE7PjBPfh/Vt5D2T7tPQ1UfWL0InwUkk9lbDSSEoyWXIXJYI0f2bagW0sBu3Uq6mdv/o+N7FjaPEjJ4CQaofXvL+KiuiKKKKIKKKKAqr+tLoCk8TYrCxBZ47s6oLdqvHuje433Gp1GptVoUUHHSUqxr92JLDupm3akuS2vPS392q4OtToLhlhlx8V4nUhnRRdHLOFuB9hrtckaHXS5vVNYuQM1xuCqo/Cir6agmo03wRNkuRoSTfXhpXTXQibNs7Bta3+HjHL2UC3tyNr1zlNGvZ3S4sq6XNiTvNr2Bua6J6ATO+zcI0ntdko81XuqfVQD61IVI65t619vNisfIl/1eHJiQeKmzt5lwRfkorpGuSukcitjMSysHVp5CrA3DAyMQQeII1rTJsU0tjxFkGm4n466++kaitgktpwqNRf/Vf03jxUSYWVguIjUKLn/NRRYMv7wA7w9RpusWuPY5CrBlJBUggg2II1BBGoI51cnQbrVUgQ49rEWCz20PhKFGh/fAtztvLaaWH0q6PR4/DNh5CygkMGW11ZToRfTmPImq0//C8kbCSHHLnQh0zREWZTdbkOeIGtvSrdweLjlQPG6Oh3MjBlPkRpSmqhiw+3BlXtIZVksM4ETMA9u8AwGovfWinyig9ooooCiiighHW9iMmypgN8jRoPWRSfgprm9hXQHXfJbZyC3tYhB5WSRv6fjVASVFKsPITZSdCLV0p1cys2zMIWtcR5dOSMUHwUVzLG1rGukeqzEK+y8PlN8udWHJhI5I+IPkRSLeJbKtwRzBHvFcibR2fLBI0UyNG6mxVhY+Y5g8CNDXX9I8fs6Gdcs0Ucq8nRWHoGBtVZchE15mrpubq32W5zHCIDe/deRR/CrAW8LUwdOeq2HEIHwSRwTKLZAMsci8iAO6/Jra7jzAUJehSeFOW2Ng4rCMVxEDxnmw7p+64urehNNqtUU6bMMoN0d1O/uMynzupFX91Y7ekxOGZJ2zyQsFzH2mRhdS/71wwvxsONUlsLZO0JNMNDNZtMyoQP/Meyj31a/Vr0OxuCleWeRVR0s0WYuxbQhmt3VI11Bbeak3tbrSzaKKK0yKKKKAooooKs69sSBhcNHfV5i4HgkTqf/cHvqjJFqzuvbHMcZBEfZjhzj70jsCfdGvuqsc9RYyigY8L1a/UntjsppMG5ssw7SO+7tEFmXzKAH8BqtNm4lFa7ozi24G3xpfDtYxyRyxRlWjkWRL66qbgEjeDuI4g1NtamnVNFa4mJUEixIBI5aVsrTAooooMSAd+tYCFRuVfcK20UBRRRQFFFFAUUUUBRRRQR/pX0ewuKiP6RCshRSVOoZfJ1IIHhe1VnsTobgXJDQX1H/aSj5NRRQT7B9XWy01GEUn955W/1uaccJ0TwEbB0wkAYWIbs1JB5gkXr2igfKKKKAooooCiiigKKKKAooooP/9k=" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
