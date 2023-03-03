import { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';

const ContributeForm = ({ address }) => {
  const router = useRouter();

  const [value, setValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);
    const campaign = Campaign(address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether'),
      });
      router.push(`/campaigns/${address}`);
    } catch (err) {
      setErrorMsg(err.message);
    }
    setIsLoading(false);
    setValue('');
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)} error={errorMsg !== ''}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label='ether'
          labelPosition='right'
          placeholder='1'
        />
      </Form.Field>
      <Message error header='Oops...' content={errorMsg} />
      <Button type='submit' primary loading={isLoading}>
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
